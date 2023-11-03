let x ;

const arr = [34, 55 , 65 , 20 ,15]

// push method puts a value to the end of the array
arr.push(100)

// pop takes off the the last element of the array 
arr.pop();

// unshift adds the value to the 0 index of the array
arr.unshift(99)

arr.shift()

// arr.reverse();

x = arr.includes(20)

x = arr.indexOf(340)

x =arr.slice(1 , 4) // slice doesn't change the array 

// splice takes some elements out of your arrays and it does change the array 
// x = arr.splice(1 , 4)

x= arr.splice(1 , 4).reverse().toString().charAt(0)

console.log(x , arr);
// later on we will cover the high order array methods



