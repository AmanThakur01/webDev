const express = require("express");
const path = require('path');
const app = express();
const port=8000;

app.use("/static",express.static('static'));
app.use(express.urlencoded());

app.set("view engine",'pug');
app.set("views",'./views');

app.get('/',(req,res)=>{
    res.send("this is my first express app..");
})

app.listen(port,()=>{
    console.log('app started successfully...');
    
})