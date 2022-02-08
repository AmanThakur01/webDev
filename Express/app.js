const express = require("express");
const path = require('path');
const app = express();
const port=80;

app.use('/static',express.static('static'));

app.get('/',(req,res)=>{
    res.send("this is my first express app..");
})
// pug engin
app.set('view engine','pug');

app.set('views','./views');

app.get('/demo',(req,res)=>{
    res.status(200).render('demo',{title:'hey',message : 'This is pug demo'});
})
app.get('/about',(req,res)=>{
    res.send("this is my about page of first express app..");
})
app.post('/about',(req,res)=>{
    res.send("this is my about page of first express app using post request..");
})
app.get('/status',(req,res)=>{
    res.status(404).send("this is my about page of first express app using post request..");
})
app.listen(port,()=>{
    console.log('app started successfully...');
    
})