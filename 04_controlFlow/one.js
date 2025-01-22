//if
const  isUserloggedIn = true
const temperature = 55;

if (temperature < 50) {
    // console.log(" less than 50");
    
}else{
    // console.log("temperature is greater than 50")
}


// we have , != < , > , <= , => , <==, >==, ===, !==
// lets use one by one 

const score = 200;
// if (score > 100) {
//     const power ="fly"
//     console.log(`user power : ${power}`);
    
// } 
// console.log(` user power : ${power}`)
const balance =1000
// if(balance >500) console.log("test")      

// if (balance < 500) {
//     console.log("less then 500")
// } else if(balance< 750){
//  console.log("less then 750");
 
// }else if(balance< 900){
// console.log("less then 900");

// }else{
//     console.log("less then 1200");
    
// }



const userLoggedIn  = true
const  debitCard  = true 
// here we are using && that means all conditions must be true 
if(userLoggedIn  && debitCard && 2==2){
    // console.log(" Allow to buy course")
}


const  LoggedinfromEmail = true 
const loggedInfromGoogele= false
 // we use pipe sign "||" if we want not all conditions must be true
if (loggedInfromGoogele || LoggedinfromEmail) {
    console.log("user logged In ")
}
