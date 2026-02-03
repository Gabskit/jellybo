const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'www', 'Bubble_icon.svg');
if (!fs.existsSync(svgPath)) {
  console.error('SVG not found:', svgPath);
  process.exit(1);
}
const svg = fs.readFileSync(svgPath);

const sizes = {
  'mipmap-mdpi': 48,
  'mipmap-hdpi': 72,
  'mipmap-xhdpi': 96,
  'mipmap-xxhdpi': 144,
  'mipmap-xxxhdpi': 192
};

const androidResBase = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');

for (const [folder, size] of Object.entries(sizes)) {
  const destDir = path.join(androidResBase, folder);
  fs.mkdirSync(destDir, { recursive: true });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size }, background: 'transparent' });
  const png = resvg.render().asPng();
  fs.writeFileSync(path.join(destDir, 'ic_launcher.png'), png);
  fs.writeFileSync(path.join(destDir, 'ic_launcher_round.png'), png);
  // Also write foreground for adaptive icon (transparent background recommended)
  const resvgFg = new Resvg(svg, { fitTo: { mode: 'width', value: size }, background: 'transparent' });
  const pngFg = resvgFg.render().asPng();
  fs.writeFileSync(path.join(destDir, 'ic_launcher_foreground.png'), pngFg);
  console.log('Wrote', folder, 'size', size);
}

console.log('Mipmaps generated.');
