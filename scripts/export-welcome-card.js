/**
 * Export the welcome card to a 2x PNG.
 *
 *   node scripts/export-welcome-card.js
 *
 * The handoff shipped a preview render made with Palatino, Carlito and
 * DejaVu Mono because the real webfonts were not available to whoever
 * made it. That file is an approved design, not an approved asset. This
 * renders the same layout in Chrome with Playfair Display, Inter and
 * JetBrains Mono actually loaded.
 *
 * document.fonts.ready is not optional: without it the screenshot can
 * fire before Playfair arrives and the export substitutes a system serif,
 * which is the exact fault it exists to avoid. It is also not sufficient
 * on its own — it resolves whether or not a face downloaded — so the
 * script measures the headline against Georgia afterwards and fails loudly
 * if the two match.
 *
 * puppeteer-core drives the Chrome already installed on the machine
 * rather than downloading a second copy of Chromium.
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');

const SRC =
  'C:/Users/Bijal/OneDrive/Desktop/Omameh Group/Welcome Card Design/welcome-card-navy.html';
const OUT = 'public/email/welcome-card-navy@2x.png';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const W = 1200;
const H = 600;
const SCALE = 2;

(async () => {
  if (!fs.existsSync(CHROME)) throw new Error('Chrome not found at ' + CHROME);
  if (!fs.existsSync(SRC)) throw new Error('Card source not found at ' + SRC);
  fs.mkdirSync('public/email', { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--font-render-hinting=none'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: W, height: H, deviceScaleFactor: SCALE });
    await page.goto('file:///' + SRC.replace(/ /g, '%20'), {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    await page.evaluate(() => document.fonts.ready);

    const check = await page.evaluate(() => {
      const faces = [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family))];
      const mk = (font) => {
        const s = document.createElement('span');
        s.textContent = 'Thank you';
        s.style.cssText = 'position:absolute;left:-9999px;white-space:nowrap;font:' + font;
        document.body.appendChild(s);
        const w = Math.round(s.getBoundingClientRect().width);
        s.remove();
        return w;
      };
      return {
        faces,
        rendered: mk("italic 400 112px/.95 'Playfair Display',serif"),
        georgia: mk('italic 400 112px/.95 Georgia,serif'),
      };
    });

    if (!check.faces.some((f) => /Playfair/i.test(f))) {
      throw new Error('Playfair Display never loaded — faces present: ' + check.faces.join(', '));
    }
    if (check.rendered === check.georgia) {
      throw new Error('Headline measured identical to Georgia — the face was substituted.');
    }

    await page.screenshot({ path: OUT });

    const png = fs.readFileSync(OUT);
    const w = png.readUInt32BE(16);
    const h = png.readUInt32BE(20);
    if (w !== W * SCALE || h !== H * SCALE) {
      throw new Error(`Expected ${W * SCALE}x${H * SCALE}, got ${w}x${h}`);
    }

    console.log('faces loaded : ' + check.faces.join(', '));
    console.log('headline     : ' + check.rendered + 'px rendered, ' + check.georgia + 'px in Georgia — not substituted');
    console.log('written      : ' + OUT + '  ' + w + 'x' + h + '  ' + (png.length / 1024).toFixed(0) + 'KB');
  } finally {
    await browser.close();
  }
})();
