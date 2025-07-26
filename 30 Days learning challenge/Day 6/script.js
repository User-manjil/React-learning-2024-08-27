// let x= 40

const demo = document.getElementById('demo')

// demo.innerHTML = x

let array1 = ['Banana', 'Mango', 'Apple','kiwi']

// array1.length = 2

// console.log(array1);
let position = array1.lastIndexOf('kiwi')

// console.log(position);
// console.log(array1.includes('Mango'));
// let first = array1.find(myfunction)

const numbers = [ 900,20 ,14100, 530,999]

// numbers.sort(numbers)

// demo.innerHTML = numbers[0]
// numbers.sort()
// numbers.reverse()
// console.log(numbers);

// let first = numbers.findIndex(myfunction)

// function myfunction(value , index, array)
// {
//     return value > 18

// }
// demo.innerHTML = numbers


// function myArrayMin(arr){
//     return Math.max.apply(null, arr)
// }

// demo.innerHTML = myArrayMin(numbers)

// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

// cars.sort(function(a,b){return a.year - b.year})  if value is negative returns b as output and is positive then value is positive

// demo.innerHTML = cars[0].year



// array iteration

// const company = ['meta', 'take2interactive','zoho','houseofx']

// let txt =''

// // company.forEach(companyFunction)
// company.map(companyFunction)

// function companyFunction(value , index , array){
//   txt += value+'1+2' +'<br>'
// }

const numbers1 = [1,2,3,4];
// const numbers2 = numbers1.map(myFunction);

// const number2 = numbers1.flatMap((x)=> x*2)

// function myFunction(value) {
//   return value * 2;
// }
// demo.innerHTML ='number1: '+numbers1+'<br>' +'number2: '+numbers2

// const number2 = numbers1.filter(myfunc)
// const number2 = numbers1.filter(myfunc)

// function myfunc(value,index,array){
//   return value >= 2
// }

// demo.innerHTML = number2 

const numbers3 = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
let total =0
function myFunction(total, value, index, array) {
  return total + value;
}

demo.innerHTML = sum
