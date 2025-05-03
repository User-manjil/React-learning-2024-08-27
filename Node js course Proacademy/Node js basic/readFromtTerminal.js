const readLine = require('readline');
// const { Readline } = require('readline/promises');
const rl = readLine.createInterface({
    input: process.stdin,
    output : process.stdout
});
rl.question("Please Enter your name :", (name)=>{
    console.log("You entered  :" + name);
    rl.close();
    
})
rl.on('close',()=> {
    console.log("Interface closed.");
    process.exit(0);
})