const express = require('express');
const app = express();

app.get('/kidney', (req, res) => {
    const username =req.headers.username;
    const password =req.headers.password;
    const kidneyid =req.query.kidneyid;

    if(username !== 'saiful' || password !== 'pass'){
        return res.status(401).json({"error": "Unauthorized access"});
    }
    if(kidneyid !== '1' && kidneyid !== '2'){
        return res.status(400).json({"error": "Invalid kidney ID"});
    }
    res.json({
        "message": "Successful validation!Your kidney is fine now!",
        "kidneyid": kidneyid,
        "username": username,
        "password": password

    })

});
app.listen(3000);