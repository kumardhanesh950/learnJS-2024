//object
//there are two method to declare an object 
// 1: literals (se singleton ni banega)  2: Constructor (is se singleton object banta he)

//object litterals
const mySym = Symbol("key1")
const jsUser = {
    name : "Dhanesh",
    "full name" : "Dhanesh Kumar",
    age : 18,
    email : "kumardhanesh950@gmail.com",
     location :"jaipur",
     isLoggedIn:false,
     lastLogginDays :["Monday","saturday"],
     [mySym]: "mykey1",


}
console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"])  
console.log((jsUser[mySym]));

// we can also change the specific value

jsUser.email ="khatridhaneshmth46@gmail.com"

// console.log(jsUser); 
// we can also freeze the object so that no one can make changes in value
// Object.freeze(jsUser)
jsUser.email= "dhanesh@goole.com"
// console.log(jsUser);


jsUser.greeting =function(){
    console.log("hello JS user");}

jsUser.greetingtwo =function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())

