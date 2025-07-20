const demon = document.getElementById('demo')


let demon1 = "Hello manjil"

let text = demon1.repeat(3)

demon.innerText= text + ' '


// replace 

let question = "Hello I am Programmar , Programming is my Hobby. and Programmar needs rest too"

let answer = question.replace("Programmar","student")
//  answer = question.replaceAll("Programmar","student")
let newAnswer =answer.split(',')

demon.innerHTML=newAnswer[1]

const hero = document.getElementById('hero')


// let index = question.indexOf("Programmar")  
// let index = question.lastIndexOf("Programmar")  
// let index = question.search(/Programmar/)  
// let index = question.match('P1rogrammar')  
// hero.innerHTML = index


// Perform a global, case-insensitive search for "ain":

// // let text = "The rain in SPAIN stays mainly in the plain";
// // text.match(/ain/gi);


// let index2 = question.includes('am')

// let index2 = question.startsWith("Hello")
// hero.innerText = index2

// includes is case sensitive

index2 = question.endsWith('')


let options = [ 'home' , 'Portfolio', 'Blogs', 'About']
let html =``

for (let x of options){
    html += `<h1>${x}<h2> `
}
hero.innerHTML = html


// let x =123;

// x=x.toString();
// console.log(typeof(x))

// // console.log(x)

// let x =1

// x=x.toExponential()

// console.log(x);

// let op = 9.56
// console.log(op.toPrecision(4));

// let x= 123
// console.log(x.valueOf())
// console.log((123).valueOf());
// console.log((100 +23).valueOf());


const op = Number(new Date("1970-01-01"))

console.log(op);

console.log(op.toPrecision("1"))


