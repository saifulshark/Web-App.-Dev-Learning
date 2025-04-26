const express = require('express');
const app = express();
//app.use(express.json()); // এটা এখন প্রয়োজন নেই যদি body ব্যবহার না করো

let counter = 0;

const middleCounter = (req, res, next) => {
    counter++;
    console.log(`Request count: ${counter}`);
    next();
}
//app.use(middleCounter);

let totalTime = 0;
let totalRequests = 0;
//finding average time, my server is taking time to process or response on requests
// it will be used to find out how much time my server is taking to process or response on requests

const averageTimeMiddleware = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const end = Date.now();
        const duration = end - start;

        totalTime += duration;
        totalRequests++;

        const averageTime = totalTime / totalRequests;

        console.log(`Request time: ${duration}ms, Average time: ${averageTime.toFixed(2)}ms`);
    });

    next();
};

//app.use(averageTimeMiddleware);

const middleParam = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username !== 'saiful' || password !== 'pass') {
        return res.status(401).json({ "error": "Unauthorized access" });
    }
    next();
}

const middleQueryKidney = (req, res, next) => {
    const kidneyid = req.query.kidneyid;
    if (kidneyid !== '1' && kidneyid !== '2') {
        return res.status(400).json({ "error": "Invalid kidney ID" });
    }
    next();
}

app.get('/kidney', middleCounter, averageTimeMiddleware, middleParam, middleQueryKidney, (req, res) => {
    res.json({
        "message": "Successful validation! Your kidney is fine now!",
        "kidneyid": req.query.kidneyid,
        "username": req.headers.username,
        "password": req.headers.password
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
