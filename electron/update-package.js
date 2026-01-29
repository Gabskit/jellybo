
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.author = 'Jellybo Team';
pkg.main = 'dist/index.js'; // Ruta al archivo compilado

pkg.build = pkg.build || {};
pkg.build.files = [
  'dist/**/*',     // Código JS compilado
  'app/**/*',      // Interfaz web
  'assets/**/*',
  'package.json'
];

if (pkg.build.rpm) {
    pkg.build.rpm.synopsis = 'Jellybo Multiplatform';
    delete pkg.build.rpm.summary;
    delete pkg.build.rpm.architecture;
}

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

console.log('package.json updated successfully!');
