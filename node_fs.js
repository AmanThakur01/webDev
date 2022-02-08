// this is scyncronus or blocking
const fs = require("fs");//file system == fs
let text = fs.readFileSync("readme.txt","utf-8");
// ascyncronus or non-blocking
let text = fs.readFile("readme.txt","utf-8",(err,data)=>{
console.log(err+" "+data);
});

text = text.replace("This","These");

console.log("content of file is ");

console.log(text);

fs.writeFileSync("againreadme.txt",text);
console.log("File system is writing");