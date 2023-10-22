//   String 

const FirstName = "John"
// Number 
const age = 60 
const temp = 98.2
const output = temp

console.log(output , typeof output) ;

// Null 

const aptmnt = null 

console.log(aptmnt , typeof aptmnt);
// Undefined 
const score =undefined 

console.log(score , typeof score);
// Symbol 

const id= Symbol('1234')

console.log(id , typeof id);

// BigInt

const n = 123351511851n

console.log(n , typeof n );

// Refrence type 

const numbers = [1,2,3,4,5]

console.log(numbers , typeof numbers);


function sayHello (){
      console.log("Hello");
}

const person = sayHello ;

console.log(person);

