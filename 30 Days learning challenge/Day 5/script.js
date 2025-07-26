// // let x = Number.NaN

const demo = document.getElementById('demo')


// // demo.innerHTML = x

// const array1 = ['toyota', 'suzuki', 'honda','heloo']


// // demo.innerHTML = array1.toString()
// demo.innerHTML = array1


// const array1 = ['Banana','Apple','Orange','Grape']
// array1.push('lemon')
// console.log(array1);

// array1.pop()
// console.log(array1);

// let text= '<ul>'
// array1.forEach(myfunction);
// text +='</ul>'

// function myfunction(value){
//     text += `<li>${value}</li>`
// }

// demo.innerHTML= text

// const ara1 = []

// ara1['firstName']="John"
// ara1['lastName']='Doe'



// console.log(ara1)

// const ar2 =[]

// ar2[0]="john"
// ar2[1]='Doe'

// console.log(ar2);




// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.


// const arryCons = new Array()

// arryCons.push('lemon')
// // console.log(arryCons);

// const points = new Array(12,20,40)

// console.log(points);

// console.log(typeof points);
// console.log(typeof arryCons);

// console.log(Array.isArray(points));


// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// let x=''

// for (let i in myObj.cars){
//     x +="<h1>" + myObj.cars[i].name +"</h1>";
//     for (let j in myObj.cars[i].models){
//         x+=myObj.cars[i].models[j];
//     }
// }

// const fruits = ['Banana', 'Orange','Grapes','1']

// let size = fruits.length

// let stringArr= fruits.toString()


// console.log(fruits.at(1));
// console.log(fruits.join('*'));
// fruits.pop()
// console.log(fruits);
// fruits.push('kiwi')
// console.log(fruits)

// fruits.shift()
// console.log(fruits)
// fruits.unshift('mango')
// console.log(fruits)



// console.log(size);
// console.log(stringArr);



const boys =['hari', 'shyam',' rikesh','Manoj']
const girls = ['Hita','sita','rita','maya']

const childern = boys.concat(girls)

console.log(childern);

const chocolate = ['dairyMilk','kitkat','snickers','bounty']

chocolate.copyWithin(2,0,2)
console.log(chocolate);

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);
