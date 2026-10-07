import fs from 'fs';
import path from 'path';

const realImagesDir = path.resolve('src/assets/real-imges');
const galleryDir = path.resolve('src/assets/gallery');

function getDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  // PNG
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
  }

  // JPEG
  if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xFF) {
        offset++;
        continue;
      }
      const marker = buffer[offset + 1];
      if (marker === 0xD9 || marker === 0xDA) break; // End of image or SOS
      const length = buffer.readUInt16BE(offset + 2);
      // SOF0 (0xC0), SOF1 (0xC1), SOF2 (0xC2)
      if ([0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF].includes(marker)) {
        const height = buffer.readUInt16BE(offset + 5);
        const width = buffer.readUInt16BE(offset + 7);
        return { width, height };
      }
      offset += 2 + length;
    }
  }

  // WebP
  if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    const format = buffer.toString('ascii', 12, 16);
    if (format === 'VP8 ') {
      const width = buffer.readUInt16LE(26) & 0x3fff;
      const height = buffer.readUInt16LE(28) & 0x3fff;
      return { width, height };
    } else if (format === 'VP8L') {
      const b0 = buffer[21];
      const b1 = buffer[22];
      const b2 = buffer[23];
      const b3 = buffer[24];
      const width = 1 + (((b1 & 0x3f) << 8) | b0);
      const height = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
      return { width, height };
    } else if (format === 'VP8X') {
      const width = 1 + buffer.readUIntLE(24, 3);
      const height = 1 + buffer.readUIntLE(27, 3);
      return { width, height };
    }
  }

  // AVIF (ISO BMFF / 'ispe' box)
  if (buffer.toString('ascii', 4, 8) === 'ftyp') {
    const ispeIndex = buffer.indexOf('ispe');
    if (ispeIndex !== -1) {
      const width = buffer.readUInt32BE(ispeIndex + 8);
      const height = buffer.readUInt32BE(ispeIndex + 12);
      return { width, height };
    }
  }

  return { width: 0, height: 0 };
}

function analyzeDir(dir, prefix) {
  const files = fs.readdirSync(dir);
  return files.map(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) return null;
    const { width, height } = getDimensions(fullPath);
    let orientation = 'square';
    if (width > height) orientation = 'landscape';
    else if (height > width) orientation = 'portrait';

    let qualityTier = 'LOW';
    if (width >= 1600 || height >= 1600) qualityTier = 'HIGH';
    else if (width >= 800 || height >= 800) qualityTier = 'MEDIUM';

    return {
      filename: file,
      folder: prefix,
      path: fullPath,
      sizeBytes: stats.size,
      sizeKB: Math.round(stats.size / 1024),
      width,
      height,
      orientation,
      qualityTier
    };
  }).filter(Boolean);
}

const list1 = analyzeDir(realImagesDir, 'src/assets/real-imges');
const list2 = analyzeDir(galleryDir, 'src/assets/gallery');
const allImages = [...list1, ...list2];

fs.writeFileSync('scripts/images-analysis.json', JSON.stringify(allImages, null, 2));
console.log(`Analyzed ${allImages.length} images.`);
