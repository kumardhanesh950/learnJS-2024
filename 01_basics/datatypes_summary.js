//Datatypes 
// there are two 2 types of datatypes ( Primitive and non-primitive)
// primitives
// 7 types : string , number, null, boolean, null, symbol, BigInt


const score =100;
const scorevalue = 100.3;

const isloggedIn= false
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)   // we get false as a output. so this is because of Symbol

const bigNumber = 234325435495732987523n  // BigInt



//reference (non-primitives)
// array , object, functions

const heros =["shaktiman", "naagraj","doga"];
let myobj={
    name: "hitesh",
    age : 22,
}

const myFunction =function(){
    console.log("hello world");
    
}

//note . all types k non-primitive ka datatype funtions hi ata he