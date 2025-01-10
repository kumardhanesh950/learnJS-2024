



if(true){
    let a =10;
    const b =20;
    var c = 30;
}
//console.log(a);  // we get error output a is not defined 
// console.log(b); // means a or b ko hum access ni ker sakte because wo scope k ander he 
// console.log(c);// but c ko hum because of var




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//   NESTED SCOPE

function one() {
    const username ="hitesh"

    function two() {
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)   //error 1
    two()
}
// one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
     const website =" youtube"
     console.log(username + website)
    }

    // console.log(website);   //error 1
    
}
// console.log(username);  // error 2

console.log(addone(5)); // yaha  function declare kerne se pehly hum ne use call kiya to hogya 

function addone(num){
    return num +1
}


// console.log(addtwo(5)); //but yaha function call kerne k pehly hum ne use call kiya to error aya ku k yeh funtion varible me stored tha

const addtwo = function(num){
    return num +2
}
