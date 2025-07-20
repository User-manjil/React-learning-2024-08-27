
// // Numbers 
// let length = 16;
// let weight = 7.5;

// // Strings
// let color = "Yellow";
// let lastName = "Johnson";

// // Boolean
// let x = true;
// let y =false ;

// // Object 
// const Person = {firstName:"John", lastName:"Don"};

// // Array Object 
// const cars = ["Saab","Volvo","BMW"];

// // Date Object
// const Date = new.Date("2022-03-25")

// let x2 = 16+ 'volvo'


//  x = BigInt("123456789012345678901234567890");
//  console.log(x);

// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// // Automatically (self invoked)

// function myFunction(p1,p2){
//     return p1*p2;
// }
// let value =myFunction(2,82)
// console.log(value);


const cars ={type:"Fiat", model:"500", color:'White'}
console.log(cars.type);

const demon=document.getElementById('demon');

demon.innerHTML=cars.model;
// const person = new Object();

// person.firstName="Lobo";
// person.LastName = "kali"
// person.age=30
// person.decription='I love coding.'



// console.log(person);



const person1 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person1.fullName);
demon.innerHTML+=person1.fullName()


// In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects



// console.log(person.firstName + ' ' + person.lastName);
// console.log(person['firstName'] + ' ' + person['lastName']);

// let f='firstName'
// let l = 'lastName'

// console.log(person[f]+ ' '+person[l]);

// delete person.age
// console.log(person);


// const CarCollection ={
//     name:'Toyota',
//     model:'20',
//     stock:{
//         p1:'20',
//         p2:30,
//         p3:40,
//     },
//     fullModel:function callThis(){
//         return this.name+'function called'
//     }
// }

// console.log(CarCollection.stock.p1)
// console.log(CarCollection.fullModel)
// console.log(CarCollection.fullModel())

// CarCollection.newFunc=function(){
//     return 'this is a new function';
// }
let person = {
    firstName:"John" ,
    lastName:"Doe" ,
    age:19, 
    occupation:'Programmar'
}
let text=''
// for(let x in person){
//     text += person[x] + '<br>'
//     console.log(x);
    
// }



let Fruits = {Banana:300, Mango:200, Orange:150}

// for (let [Fruit , Value] of Object.entries(Fruits)){
//     text += Fruit + ' values is :'+ Value + '<br>' 
// }



// for (let [key,value] of Object.entries(Object_name)){}   gives the value of the key and values
// for (let [key,value] in Object.entries(Object_name)){}   gives the index of the key and did gave a undefined to me


text = JSON.stringify(Fruits)
demon.innerHTML=text

// function Person(firstName , lastName , Age)  {
//     this.first =firstName,
//     this.last =lastName,
//     this.ages= Age
// }
// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
//   this.nationality = "English";
// }


// myFather.nationality = "English";
// // You can NOT add a new property to an object constructor:
// Person.nationality = "English";
// // To add a new property, you must add it to the constructor function prototype:
// Person.prototype.nationality = "English";

// const myFather = new Person() 


function Person (first , last , age , eye){
  this.firstName = first ;
  this.lastName = last ;
  this.age = age;
  this.eyeColor = eye;
}

const myFriend =new Person ("John","Doe",50,"blue")
const myFriend2= new Person("Sally","Rally",21,'green')


Person.prototype.changeName= function(Name){
  this.lastName =Name;
}
myFriend2.changeName('Doe')


// new Object()
// new Array()
// new Map()
// new Set()
// new Date()
// new RegExp()
// new Function()


// Did You Know?
// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().