const http =require('http');
const fs =require('fs')

const server = http.createServer((req, res)=>{
 res.end("<h1>THis is server</h1>");
    console.log('A new request recieved. ');
    console.log(res);
    
    
})

server.listen(8000, '127.0.0.1' ,()=>{
    console.log("server has started.");
    
})