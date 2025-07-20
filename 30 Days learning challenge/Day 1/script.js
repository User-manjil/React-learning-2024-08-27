// 

let x = 5 ;
let y =5 ;
let z= x+y;
let unDefinedVar
const var_demo = document.getElementById('demo');

var_demo.innerHTML=
`<h1>${z}</h1> ${unDefinedVar}`;

function addMore() {
    var_demo.innerHTML += " adding first code <br> ";
    var_demo.innerHTML  += " adding second code ";

    
}
addMore()

//   var is variable
// let is a block variable

/* Multiline Comments */

// It's a good programming practice to declare all variables at the beginning of a script.

/* choose const when you declare:

A new Array
A new Object
A new Function
A new RegExp
*/

// let array= [ 'hello', ' k xa ' , ' hey mister']

// console.log(array[1] + array[0] + array[2])

// array.push('pop eye')
// console.log(array);

let dict = { 'key1':'value1','key2':'value2','key3':'value3'}


dict.key2 ='changed the value'

console.log(dict);

// dict.map()


// Operator	Description

// +	    Addition
// -	    Subtraction
// *	    Multiplication
// **	    Exponentiation (ES2016)
// /	    Division
// %	    Modulus (Division Remainder)
// ++	    Increment
// --	    Decrement


let myVal= 9
console.log(myVal**2)
console.log(9%2);

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators



// Java Script Bitwise Operator
/*
Operator	Description	Example	Same as	Result	Decimal
&	AND	    5 & 1	0101 & 0001	0001	 1
|	OR	    5 | 1	0101 | 0001	0101	 5
~	NOT	    ~5	 ~0101	1010	 10
^	XOR	    5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2 */


// console.log(256 >> 1);

// console.log(7 >> 1);
//  111= 7 
//  right shift  = 
    // 011

/*

Operator	Example	Same As
=	        x = y	x = y
+=	        x += y	x = x + y
-=	        x -= y	x = x - y
*=	        x *= y	x = x * y
/=	        x /= y	x = x / y
%=	        x %= y	x = x % y
**=	        x **= y	x = x ** y 


*/

/*
Bitwise Assignment Operators
Operator	Example	Same As
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y


*/

let xo = 10
xo &= 7 // and bit wise operator

xo |= 7// or bit wise operator
// 1000
// 1001
// 1010
// 0111
console.log(xo);


// && // and logical operator
// || or logical operator


