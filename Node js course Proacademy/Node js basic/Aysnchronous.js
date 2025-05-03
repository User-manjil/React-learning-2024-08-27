const readline =require('readline');
const fs = require('fs');

// let textIn= fs.readFile('./Files/input.txt','utf-8');
// // console.log(textIn);
// let dataInsert = `This is written in Javascript program not text editor. ${textIn} \n Date created ${new Date()}`;
// fs.writeFile('./Files/output.txt',dataInsert)
// console.log("reading ....");
// /// if it is syschronus it will wait for the program to be finished.
// // if it is asynchronus it will execute later coming line of code and it will output once the line of code is completed.

 fs.readFile('./Files/start.txt', 'utf-8', (error, data1)=>{
    console.log(data1);
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error, data2)=>{
        console.log(error);
        console.log(data2);
        fs.readFile('./Files/append.txt', 'utf-8', (error, data)=>{
            
        })        
    })
    
 })
 console.log("reading files..");
 