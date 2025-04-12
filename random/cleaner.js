const fs = require('fs');

// Read the file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    // Remove extra spaces between words and trim leading/trailing spaces
    //const cleanedData = data.replace(/\*+/g, ' ').trim();
    const cleanedData = data
    // .replace(/[\*\&\%\#\@\!\>\<\?\:\;\"\'\`\~\^\(\)\[\]\{\}\\\|\/\=\+\-\_]+/g, '')//special characters
 // .replace(/[\r\n]+/g, ' ') // new lines
    .replace(/\s+/g, ' ')//spaces
    .trim();

    // Write the cleaned data back to the same file
    fs.writeFile('example.txt', cleanedData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File cleaned and saved successfully.');
    });
});