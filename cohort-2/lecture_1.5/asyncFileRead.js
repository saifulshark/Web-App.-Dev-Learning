const fs = require('fs');
fs.readFile('a.txt', 'utf8', (err, data) => (
    console.log('File content:', `${data}`)
));
setTimeout(() => {
    console.log('After 20 seconds');
}, 20000);
console.log('Reading file...');
