const http = require("http");

const fs = require("fs");
 const content = fs.readFileSync("readme.txt");

 const server = http.createServer((req,res)=>{
 res.writeHead(200,{"Content-type" : "text/html"});
 res.end(content)
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("lisning at port 8080");
})
