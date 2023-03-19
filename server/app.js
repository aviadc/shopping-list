// const green = require('./1-test');
// console.log(green);
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    console.log("hey mother fucker");
})

app.listen(5000,()=>{
    console.log('we are connected on port 5000');
    // console.log("app expresss", app);
})