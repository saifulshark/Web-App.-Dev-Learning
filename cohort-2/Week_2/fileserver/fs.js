const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 3000;
const app = express();

app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);

    // Add security validation
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const ext = path.extname(filename).toLowerCase();
    
    if (!validExtensions.includes(ext)) {
        return res.status(415).send('Unsupported file type');
    }

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(404).send('File not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});