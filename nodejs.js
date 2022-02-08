const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>spaning</title>
      <style>
          .container {
              display: grid;
              grid-gap: 12px;
              grid-template-areas: 'navbar navbar navbar navbar'
                  "section section section aside";
          }
  
          #navbar {
              grid-area: navbar;
          }
  
          #section {
              grid-area: section;
          }
  
          #aside {
              grid-area: aside;
          }
  
          .box {
              background-color: lightblue;
              border: 2px solid green;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <div id="navbar" class="box">Home About Contact Us</div>
          <div id="section" class="box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus libero non,
              voluptate officia similique dolores repudiandae esse. Eveniet ea minus, quos veniam deserunt rem aperiam
              ipsa esse modi nisi fugiat iste impedit earum, ad illum, debitis quia cupiditate voluptates praesentium
              adipisci reiciendis. Nesciunt, dicta modi.this is box-2</div>
          <div id="aside" class="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero adipisci
              enim, ducimus id accusantium quos neque corporis sed, possimus saepe iste numquam nulla modi et! Error
              corrupti quos, adipisci pariatur necessitatibus eius deserunt?this is box-3</div>
  
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
