const express = require('express');
const app = express();

const zod = require('zod');
const schema = zod.array(zod.number());
app.use(express.json());

app.post('/kidneys', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        return res.status(411).json({ error: 'Please provide kidneys!' });
    }
    else{
        return res.send({response});
    }
});
app.listen(3000);