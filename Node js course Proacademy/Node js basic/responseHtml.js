const http= require("http");
const fs = require('fs');


let products = fs.readFileSync('./Product.json' , 'utf-8');


// const  html = fs.readFileSync('./Template/index.html', 'utf-8');
const server = http.createServer((req, res)=>{
    // res.end(html);
    // console.log(" A new request recieved.");
    let path = req.url;
    // res.end(path);
    if(path ==='/' || path.toLowerCase()==='/home'){
        res.writeHead("200" )
        res.end("you are in home section.");
    }
    else if(path.toLowerCase()==='/about'){
        res.writeHead("200" ,{ 'content-type': 'mytext/html', 'my-header' :"Hello , world!" } 
             
        )
        res.end("You are in about page.")
    }

    
    else if(path.toLowerCase()==='/answer'){
        res.writeHead("200" ,{
            "content-type": "application/json",
        } );
        res.end("you are in  answer page.")
      console.log(products[0]);
       
       
        
    }
    else if (path.toLowerCase()==='/page'){
        res.writeHead("200" ,{ 'Content-type': 'mytext/html', 'my-header' :"Hello , world!" } )
        res.end('You are in Pages section.')
    }
    else{
        res.writeHead("404")
        res.end("Error 404!");
    }
 
});
server.listen(8000, '127.0.0.1' ,()=>{
    console.log("Server has started.  http:\\127.0.0.1:8000 ");
    
})