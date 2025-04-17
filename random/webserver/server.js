const express= require('express');
const app= express();
function loopsum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
app.get('/sum', (req, res) => {
    const n=req.query.n;
    if(!n || isNaN(n)){
        return res.status(400).send('Bad Request: Missing query parameter n or n must be a number');
    }
    const result=loopsum(n);
    res.status(200).send(`The sum of numbers form 0 to ${n} is ${result}`);
});
const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`To test, open your browser and go to http://localhost:${PORT}/sum?n=10`);
});