// console.log("h")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")


function sayMyname() {
    console.log("h")
console.log("i")
console.log("t")
console.log("e")
console.log("s")
console.log("h")
}
// sayMyname()

// const addtwoNumber = function(number1, number2){
//     console.log( number1 + number2)
// }
// const result = addtwoNumber(3,5)  // 8 output aya or hum ne isko result variable me store kiya 

// console.log("Result :",result)   // here we got output Undefined because console ka mtlb yeh ni yeh addtwonum me value 8 store huwi ho value store kerne k liye hume value ko return kerna hota he function me as given below

const addtwoNumber = function(number1, number2){
    // let result = number1+ number2
    // return result
    // console.log("hitesh") // return k bad koi code execute ni hota
 // or we can also do like this 
 return number1+ number2
}
const result =addtwoNumber(3,5)
// console.log("result :", result);

  // function loginusername(username) {
  //   if (username ===undefined) {
  //       console.log("please enter the Username")
  //       return
  //   }
  //   return `${username} just loggedIn`

  // }
  // console.log(loginusername())

// hum username=== underfined ki jagah !username bi use ker sakte hen (! ka mtlb he.. not )
  function loginusername(username) {
    if (!username) {
        console.log("please enter the Username")
        return
    }
    return `${username} just loggedIn`

  }
  console.log(loginusername())