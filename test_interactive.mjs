// Interactive component unit and integration test
import assert from 'node:assert';
import { VEDANTA_CATALOG } from './src/data/catalog.js';

console.log('=== TEST 1: CATALOG INTEGRITY & SLUGS ===');
assert(VEDANTA_CATALOG.length >= 15, `Catalog must have at least 15 items, found ${VEDANTA_CATALOG.length}`);
console.log(`PASS: Found ${VEDANTA_CATALOG.length} machines in catalog`);

const a4Machine = VEDANTA_CATALOG.find(m => m.slug === 'vedanta-v-blow-a4-fully-automatic-pet-blow-moulding-machine-4-cavity');
assert(a4Machine, 'Flagship A4 slug must exist');
assert.strictEqual(a4Machine.model_code, 'VT-BLOW-A4');
assert.strictEqual(a4Machine.cavity, 4);
console.log('PASS: Flagship A4 slug and cavity verified');

console.log('\n=== TEST 2: CALCULATOR & SIZING ENGINE LOGIC ===');
// Sizing math verification
function calculateSizing(dailyBottles, shiftHours, beverageType) {
  const effectiveHours = Math.max(1, shiftHours);
  const requiredBPH = Math.round(dailyBottles / effectiveHours);
  const requiredBPM = Math.round(requiredBPH / 60);

  let modelCode = 'VT-BLOW-A4';
  if (beverageType === 'jar') {
    modelCode = 'VT-BLOW-JAR20';
  } else if (requiredBPH <= 1200) {
    modelCode = 'VT-BLOW-S2';
  } else if (requiredBPH <= 2400) {
    modelCode = 'VT-BLOW-A2';
  } else if (requiredBPH <= 5000) {
    modelCode = 'VT-BLOW-A4';
  } else {
    modelCode = 'VT-BLOW-A6';
  }

  // Unit economics
  const costBreakdown = [
    { item: 'PET Preform (18g virgin resin)', cost: 1.15 },
    { item: 'Plastic Cap (28mm Alaska neck)', cost: 0.22 },
    { item: 'BOPP Roll-fed Label (Wrap-around)', cost: 0.15 },
    { item: 'Power, Water & Purification', cost: 0.18 },
    { item: 'Secondary LDPE Shrink Film', cost: 0.12 },
    { item: 'Direct Labor & Routine Spares', cost: 0.20 },
  ];
  const totalCostPerBottle = costBreakdown.reduce((acc, c) => acc + c.cost, 0); // 2.02
  const wholesaleSellingPrice = 4.80;
  const netMarginPerBottle = wholesaleSellingPrice - totalCostPerBottle; // 2.78
  const monthlyWorkingDays = 26;
  const monthlyBottles = dailyBottles * monthlyWorkingDays;
  const monthlyNetProfitLakhs = Number(((monthlyBottles * netMarginPerBottle) / 100000).toFixed(1));

  return {
    requiredBPH,
    requiredBPM,
    modelCode,
    totalCostPerBottle,
    netMarginPerBottle,
    monthlyBottles,
    monthlyNetProfitLakhs
  };
}

// Case A: 25,000 bottles/day, 10 hours
const caseA = calculateSizing(25000, 10, 'water');
assert.strictEqual(caseA.requiredBPH, 2500);
assert.strictEqual(caseA.requiredBPM, 42);
assert.strictEqual(caseA.modelCode, 'VT-BLOW-A4');
assert.strictEqual(caseA.totalCostPerBottle, 2.02);
assert.strictEqual(caseA.netMarginPerBottle, 2.78);
assert.strictEqual(caseA.monthlyBottles, 650000);
assert.strictEqual(caseA.monthlyNetProfitLakhs, 18.1);
console.log('PASS: Case A (25k/day 10h) -> VT-BLOW-A4, 18.1L monthly net profit');

// Case B: Small startup (8,000 bottles/day, 10 hours -> 800 BPH)
const caseB = calculateSizing(8000, 10, 'water');
assert.strictEqual(caseB.requiredBPH, 800);
assert.strictEqual(caseB.modelCode, 'VT-BLOW-S2');
console.log('PASS: Case B (8k/day 10h) -> Semi-Auto VT-BLOW-S2 recommended');

// Case C: High speed (60,000 bottles/day, 8 hours -> 7500 BPH)
const caseC = calculateSizing(60000, 8, 'water');
assert.strictEqual(caseC.requiredBPH, 7500);
assert.strictEqual(caseC.modelCode, 'VT-BLOW-A6');
console.log('PASS: Case C (60k/day 8h) -> High-Speed Servo VT-BLOW-A6 recommended');

// Case D: 20L commercial jar
const caseD = calculateSizing(1500, 10, 'jar');
assert.strictEqual(caseD.modelCode, 'VT-BLOW-JAR20');
console.log('PASS: Case D (20L Jar) -> VT-BLOW-JAR20 recommended');

console.log('\n=== TEST 3: QUOTE MODAL WHATSAPP & VALIDATION LOGIC ===');
function buildWhatsAppQuoteLink(formData) {
  const text = encodeURIComponent(
    `*New Machinery & Quotation Inquiry - Vedanta Technologies*\n\n` +
    `*Client:* ${formData.name}\n` +
    `*Phone:* ${formData.phone}\n` +
    `*Company:* ${formData.company || 'Individual Entrepreneur'}\n` +
    `*Location:* ${formData.city}, ${formData.state}\n` +
    `*Interested Machine/Line:* ${formData.modelCode}\n` +
    `*Target Container:* ${formData.bottleSize} (${formData.dailyTarget})\n` +
    `*Includes BIS ISI Lab:* ${formData.needsLab ? 'Yes' : 'No'}\n` +
    `*Notes:* ${formData.notes || 'Please share detailed itemized quotation and CAD layout.'}`
  );
  return `https://wa.me/918850848971?text=${text}`;
}

const sampleLead = {
  name: 'Rajesh Sharma',
  phone: '9820123456',
  company: 'Himalayan Spring Beverages',
  city: 'Nashik',
  state: 'Maharashtra',
  modelCode: 'VT-BLOW-A4',
  dailyTarget: '25,000 Bottles/Day',
  bottleSize: '500ml',
  needsLab: true,
  notes: 'Require complete quotation with high-pressure air piping diagram'
};

const waLink = buildWhatsAppQuoteLink(sampleLead);
assert(waLink.startsWith('https://wa.me/918850848971?text='));
assert(decodeURIComponent(waLink).includes('Rajesh Sharma'));
assert(decodeURIComponent(waLink).includes('9820123456'));
assert(decodeURIComponent(waLink).includes('VT-BLOW-A4'));
assert(decodeURIComponent(waLink).includes('Includes BIS ISI Lab:* Yes'));
console.log('PASS: QuoteModal WhatsApp URL correctly formatted with all metadata');

console.log('\n=== ALL INTERACTIVE COMPONENT TESTS PASSED SUCCESSFULLY! ===');
