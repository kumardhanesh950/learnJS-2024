// const  email = "h@hitesh.ai "
// if( email){
//     console.log("got the email");
    
// }else{
//     console.log("don't have email")
// }


// Falsy values
//false , 0, -0, BigInt 0n, "", null, undefined, NaN

// except the above falsy value all values are truthy values we have some value we should explore

// truthy vlaue =>   "0" , 'fasle', " ", [], {}, function(){}  (empty function)

// how to check the length of an Array
const useremail = []
if (useremail.length === 0) {
    // console.log("Array is empty")
}

// how to check the length of empty obj
const emptyObj ={}
if (Object.keys(emptyObj).length ===0) {
    // console.log("object is empty")
}


// nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ??10?? 20

// console.log(val1);



// Terniary Operator 
//condition ? true: false 
const iceteaPrice = 100  
iceteaPrice <= 80 ? console.log("less then 80") : console.log("greater then 80");  

 






