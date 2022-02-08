const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
let db = mongoose.connection;
 db.once('open',()=>{
     console.log('This is mongo db,,,')
 })

 let schema = new mongoose.Schema({
     name:String
 })
 schema.methods.greet=function() { 
     console.log('This is method of schema...');
     
 }
let model = mongoose.model("model",schema);

let val = new model({name:"amanthakur"});
console.log(val);
val.greet();

val.save(function(err,val){
    if (err) return console.log(err);  
    val.greet();
})
