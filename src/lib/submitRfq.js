export async function submitRfq(data) {
  const response = await fetch('/api/rfq', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || 'Your inquiry could not be sent. Please try again.');
  return result;
}
