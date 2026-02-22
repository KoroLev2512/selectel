/**
 * Generates optimized image versions for NgOptimizedImage.
 * Run: node scripts/optimize-images.js
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ASSETS_DIR = path.join(__dirname, '../src/assets');

const CONFIG = {
  selectel_1: { width: 1200 }, // center image, recommended 1196x796
  selectel_2: { width: 600 },  // side images, recommended 556x836
  selectel_3: { width: 600 },
};

async function optimize() {
  for (const [baseName, { width }] of Object.entries(CONFIG)) {
    const input = path.join(ASSETS_DIR, `${baseName}.jpg`);
    if (!fs.existsSync(input)) {
      console.warn(`Skip: ${baseName}.jpg not found`);
      continue;
    }
    const output = path.join(ASSETS_DIR, `${baseName}_opt.jpg`);
    await sharp(input)
      .resize(width)
      .jpeg({ quality: 85 })
      .toFile(output);
    console.log(`Created ${baseName}_opt.jpg (${width}w)`);
  }
}

optimize().catch(console.error);
