// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Nodemon! Bye! Tata!🔁');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
