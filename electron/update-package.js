
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.author = 'Jellybo Team';
pkg.description = 'Bubblebox App';

// Point directly to the compiled file within the packaged dist directory
pkg.main = 'dist/index.js'; 

pkg.build = pkg.build || {};
// Include the entire dist directory, plus other assets
pkg.build.files = [
  'dist/**/*',
  'app/**/*',
  'assets/**/*',
  'package.json'
];

if (pkg.build.rpm) {
    pkg.build.rpm.synopsis = 'Bubblebox Multiplatform';
    delete pkg.build.rpm.summary;
    delete pkg.build.rpm.architecture;
}

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

console.log('package.json updated with simplified file configuration!');
