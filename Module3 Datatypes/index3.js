// //   String

// const FirstName = "John"
// // Number
// const age = 60
// const temp = 98.2
// const output = temp

// console.log(output , typeof output) ;

// // Null

// const aptmnt = null

// console.log(aptmnt , typeof aptmnt);
// // Undefined
// const score =undefined

// console.log(score , typeof score);
// // Symbol

// const id= Symbol('1234')

// console.log(id , typeof id);

// // BigInt

// const n = 123351511851n

// console.log(n , typeof n );

// // Refrence type

// const numbers = [1,2,3,4,5]

// console.log(numbers , typeof numbers);

// function sayHello (){
//       console.log("Hello");
// }

// const person = sayHello ;

// console.log(person);






// document.getElementById("testApi").addEventListener("click", showUserAds);

// function showUserAds() {
//   fetch("data.text").then(
//     (respons) => {
//       if (respons.ok) {
//         return respons.text();
//       } else {
//         throw Error(respons.status);
//       }
//     }
//   )
//   .then(ads => {
//       document.getElementById('output').innerHTML = ads
//   })
//   .catch(err => console.log(err.message))
// }


document.getElementById('input1').addEventListener('click' , SendData )

function SendData (){
  const input1 =    document.getElementById('input1').value
  const input2 = document.getElementById('input2').value

  fetch('https://jsonplaceholder.typicode.com/posts' , {
      method : 'Post' ,
      body : JSON.stringify({
            userId :  2 ,
            title : input1 ,
            body : input2 ,
            headers :{
                  'Conent-Type' : 'application/json'
            }

      })
 })
 .then(res => res.json())
  .then(post => {
      // document.getElementById('input1').innerHTML =res
      let output = `
      
      <ul>

      <li> ID : ${post.id} <li> 
      <li> ID : ${post.title} <li> 
      <li> ID : ${post.body} <li> 

      </ul>
      `
      document.getElementById('output').innerHTML = output
  })
}