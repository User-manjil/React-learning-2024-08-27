// const random_number = Math.floor(Math.random()*11)


const demo = document.getElementById('demo')


// demo.innerHTML = getRandomInteger(random_number , random_number)


// function getRandomInteger (min ,max){
//     console.log("Min:" + min);
//     console.log("Max:"+max)
//     return Math.floor(Math.random()*(max-min)+min )
   
    
// }

// demo.innerHTML += " For loop"

// for (let i=0 ; i< 10 ; i++){
//     demo.innerHTML += i + '  \t'
// }


// const person = { fname:'John' , lname:'Doe', age:25}

// let text =''
// for (let x in person){
//     text += person[x] + ' '
// }


// const numbers = [ 3,43,53,533,25]

// for (let x in numbers){
//     text += numbers[x] +' '
// }



// numbers.forEach(myFunction)

// function myFunction(value , index , array){
//     text += value;
// }




// let text =''
// const cars= ['BMW','BENZ','Volvo']

// for (let x of cars){
//     text += x + ' '
// }


// Note : It is better to use a for loop , a for of loop  or Array.forEach()  when the 
// order is important 
// console.log(text);
// let x=0
// while (x < 10 ){
//     text += "The number is :"+ x +'<br>';
//     x++;
// }
// do {
//     text+= "The number you are looking for :" + x +'<br>'
//     x++
// }while(x<10)
// demo.innerHTML += '<br>' + "for in loop hello:"+ text + " "



// const bikes = ['honda','yamaha', 'bajaj', 'royal enfield']

// let i=0;

// let text = "";

// const letters = new Set([ "a","b","c"])


// console.log(letters);


// letters.add("d")

// console.log(letters);

const letter = new Set()


const a = 'a'
const b = 'b'
const c = 'c'


letter.add(a)
letter.add(b)
letter.add(c)


console.log(letter.size);

// Method	    Description
// new Set()	            Creates a new set
// add()	                Adds a new element to a set
// clear()	                Removes all elements from a set
// delete()	                Removes an element from a set
// difference()	            Returns the difference between two sets
// entries()	            Returns an Iterator with the [value,value] pairs from a set
// forEach()	            Invokes a callback for each element in a set
// has()	                Returns true if a value exists
// intersection()	        Returns the intersection of two sets
// isDisjointFrom()	        Returns true if no elements in a set are elements in another set
// isSubsetOf()	            Returns true if a set is a subset of another set
// isSupersetOf()	        Returns true if a set is a superset of another set
// keys()	                Same as values()
// symmetricDifference()	Returns the symmetric difference between two set
// union()	                Returns the union of two sets
// values()	                Returns an Iterator with the values in a set



// const fruits = new Map([
//     ["Apples", 500],
//     ["Banana",400],
//     ["Orange",200]
// ]);


// console.log(fruits);

// fruits.set("Kiwi", 100)
// fruits.set("Mango", 100)

// console.log(fruits);
// console.log(fruits.get("Apples"));


// fruits.delete('Orange');
// console.log(fruits);

// fruits.clear()
// let text = "";
// for (const x of fruits.entries()) {
//   text += x;
// }
// let text = "";
// for (const x of fruits.keys()) {
//   text += x;
// }
// console.log(text);



// console.log(fruits);


const fruits = [ {name:'apples',quantity:100},
                 {name:'banana',quantity:300},
                 {name:'Orange',quantity:150},
                 {name:'Kiwi',quantity:250}]

function callBackFuction({quantity}){
    return quantity > 150 ? 'yes' :'no'; 
}
const result = Map.groupBy(fruits , callBackFuction)

console.log("result : "+ result);








