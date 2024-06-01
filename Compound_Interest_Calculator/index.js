const express = require('express')
const app = express()
const cors = require("cors"); 

const port = 3000;

app.use(cors());

app.get("/compInterest", (req, res) => {
    const principal = Number(req.query.pc); 
    const interestRate = Number(req.query.r); 
    const time = parseInt(req.query.tc); 
    const compoundingFrequency = parseInt(req.query.y); 

    const totalPeriods = time * compoundingFrequency;
    const amount = principal * Math.pow((1 + interestRate / compoundingFrequency), totalPeriods);

    if (amount > Number.MAX_SAFE_INTEGER) {
        console.log("The result is too large to be safely stored in a JavaScript variable.");
        res.send("Result exceeds safe integer limit.");
    } else {
        console.log("The result is within the safe integer range.");
        res.send(amount.toString());
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});