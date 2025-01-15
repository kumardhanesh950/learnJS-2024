const user ={

    username :"Dhanesh kumar",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
        
    }
    
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this)


// const chai = function(){
//     let username ="hitesh"
//     console.log(this)
// }
// chai()
const chai = ()=>{
    let username ="hitesh"
    console.log(this)
}
// chai()

//arrow function 
const addtwo =(num1, num2) => {
    return num1+num2
}
// console.log(addtwo(2,5))

// we can also write arrow function like this

const addThree=(num1,num2,num3)=>(num1+ num2+ num3)   // we can also remove these small brackets
// console.log(addThree(3,2,5))




