import { neon } from '@neondatabase/serverless';

const MAX_BODY_BYTES = 12_000;
const MAX_FIELD_LENGTH = 2_000;

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = request.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) return response.status(400).json({ error: 'Invalid request.' });
  if (Buffer.byteLength(JSON.stringify(body), 'utf8') > MAX_BODY_BYTES) return response.status(413).json({ error: 'Request is too large.' });

  // Honeypot for basic automated spam. Real visitors never see or fill this field.
  if (typeof body.website === 'string' && body.website.trim()) return response.status(200).json({ ok: true });

  const fields = ['name', 'phone', 'company', 'city', 'state', 'modelCode', 'dailyTarget', 'bottleSize', 'notes'];
  const data = Object.fromEntries(fields.map((key) => [key, String(body[key] ?? '').trim()]));
  if (!data.name || !data.phone) return response.status(400).json({ error: 'Name and phone number are required.' });
  if (data.name.length > 120 || data.phone.length > 40 || fields.some((key) => data[key].length > MAX_FIELD_LENGTH)) {
    return response.status(400).json({ error: 'One or more fields are too long.' });
  }
  if (!/^\+?[\d\s().-]{7,24}$/.test(data.phone)) return response.status(400).json({ error: 'Enter a valid phone number.' });

  if (!process.env.DATABASE_URL) {
    console.error('RFQ storage is unavailable: configure DATABASE_URL from the Vercel Marketplace database integration.');
    return response.status(503).json({ error: 'The inquiry service is not configured yet. Please call +91 8850848971 or email vedantatechn@gmail.com.' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`CREATE TABLE IF NOT EXISTS rfq_submissions (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      company TEXT NOT NULL DEFAULT '',
      city TEXT NOT NULL DEFAULT '',
      state TEXT NOT NULL DEFAULT '',
      model_code TEXT NOT NULL DEFAULT '',
      daily_target TEXT NOT NULL DEFAULT '',
      bottle_size TEXT NOT NULL DEFAULT '',
      needs_lab BOOLEAN NOT NULL DEFAULT FALSE,
      notes TEXT NOT NULL DEFAULT '',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;
    const [lead] = await sql`INSERT INTO rfq_submissions
      (name, phone, company, city, state, model_code, daily_target, bottle_size, needs_lab, notes)
      VALUES (${data.name}, ${data.phone}, ${data.company}, ${data.city}, ${data.state},
        ${data.modelCode}, ${data.dailyTarget}, ${data.bottleSize}, ${Boolean(body.needsLab)}, ${data.notes})
      RETURNING id`;
    return response.status(201).json({ ok: true, id: String(lead.id) });
  } catch (error) {
    console.error('RFQ database insert failed.', error instanceof Error ? error.message : 'Unknown database error');
    return response.status(502).json({ error: 'We could not deliver your inquiry. Please call +91 8850848971 or try again.' });
  }
}
