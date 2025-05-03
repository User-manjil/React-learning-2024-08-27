const readline =require('readline');
const fs = require('fs');

let textIn= fs.readFileSync('./Files/input.txt','utf-8');
// console.log(textIn);
let dataInsert = `This is written in Javascript program not text editor. ${textIn} \n Date created ${new Date()}`;
fs.writeFileSync('./Files/output.txt',dataInsert)