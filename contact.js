console.log("This is Contact.js...")
const express = require("express");
// const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port=80;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/contact');
}
let db = mongoose.connection;
 db.once('open',()=>{
     console.log('This is mongo db,,,')
 })

 let schema = new mongoose.Schema({
     name:String,
     email:String,
     address:String
 })

let model = mongoose.model("model",schema);

app.post('/contact',(req,res)=>{
    console.log('/contact');
    
    let val = new model(req.body);
    val.save().then(()=>{
        res.send("Data is saved in mongoDB");
    }).catch(()=>{res.send("GOt some error...")})
})

app.listen(port,()=>{
    console.log('app started successfully...');
    
})