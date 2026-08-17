// Actualiza el parámetro ?v= de script.js y tailwind.css en los HTML
// para forzar que el navegador recargue los archivos tras cada build.
const fs = require('fs');
const path = require('path');

const version = Date.now();
const files = ['index.html', 'nosotros.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/script\.js\?v=\d+/g, `script.js?v=${version}`);
    content = content.replace(/tailwind\.css\?v=\d+/g, `tailwind.css?v=${version}`);
    fs.writeFileSync(filePath, content);
});

console.log(`Versión de caché actualizada a ${version}`);
