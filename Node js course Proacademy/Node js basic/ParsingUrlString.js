const url = require("url");
const http = require("http");
const fs = require('fs');

const server = http.createServer((request , response)=>{
   let {query, pathname:path}=  url.parse(request.url, true);
    // let path = request.url;

    )
    // console.log(query);
    

    if(path=== '/ ' || path === '/home'){
        response.end("This is home page.")
        
    })

server.listen(8000,'127.0.0.1', ()=>{
    console.log('Server has started.');
    
})
