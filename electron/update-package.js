
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.author = 'Jellybo Team';
pkg.description = 'Bubblebox App';

// When packaging, the content of 'dist' is moved to the root of app.asar
// That's why we just specify 'index.js'
pkg.main = 'index.js'; 

pkg.build = pkg.build || {};
pkg.build.files = [
  { "from": "dist/", "to": "." },
  { "from": "app/", "to": "app/" },
  "assets/**/*",
  "package.json"
];

if (pkg.build.rpm) {
    pkg.build.rpm.synopsis = 'Bubblebox Multiplatform';
    delete pkg.build.rpm.summary;
    delete pkg.build.rpm.architecture;
}

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

console.log('package.json updated for electron-builder!');
