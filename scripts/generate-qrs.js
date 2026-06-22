/**
 * One-time QR-code generator for /media kit.
 * Run with: node scripts/generate-qrs.js
 *
 * Outputs three branded SVG QR codes to public/qr/.
 * Foreground: gold #C9A84C. Background: cream #F4F0E6 (high-contrast
 * for scanners; the card container around the QR carries navy).
 * Error correction level M (15% redundancy).
 */
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const targets = [
  { file: 'omameh-com-au.svg',        url: 'https://omameh.com.au' },
  { file: 'linkedin-company.svg',     url: 'https://www.linkedin.com/company/omameh/' },
  { file: 'linkedin-bijal.svg',       url: 'https://www.linkedin.com/in/bijal-sejpal/' },
  { file: 'subscribe-fieldnotes.svg', url: 'mailto:fieldnotes@omameh.com.au?subject=Subscribe to Field Notes&body=Please add me to Field Notes.' },
];

const outDir = path.resolve(__dirname, '..', 'public', 'qr');
fs.mkdirSync(outDir, { recursive: true });

const opts = {
  errorCorrectionLevel: 'M',
  type: 'svg',
  margin: 2,
  color: { dark: '#C9A84C', light: '#F4F0E6' },
};

(async () => {
  for (const { file, url } of targets) {
    const svg = await QRCode.toString(url, opts);
    const outPath = path.join(outDir, file);
    fs.writeFileSync(outPath, svg, 'utf8');
    console.log(`wrote ${outPath}  ←  ${url}`);
  }
})().catch((e) => { console.error(e); process.exit(1); });