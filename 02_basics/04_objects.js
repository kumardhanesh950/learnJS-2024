const tinderUser = new Object()   
// console.log(tinderUser)  //output =>  {}  but this is singleton object 
const  tinder_user ={}
// console.log(tinder_user)   //output =>  {} this is non-singleton object

tinderUser.id ="123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn =false
// console.log(tinderUser)

//note hum object k ander object or object k under object declare or access ker sakte as below:
const regularUser ={  
    email : "some@gmail.com",
    fullname :{
        userFullname :{
            firstName: "Dhanesh",
            lastName :"Kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);
const obj1 = {1 : "a", 2:"b"};
const obj2 ={3: "a", 4: "b"}
// const obj3 =Object.assign({}, obj1, obj2)   // empty object is me target hota he or variable is me source
//OR we use mostly sprread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users =[
    {
        id :1,
        email:"h@gmail.com"
    },
    {
        id :2,
        email:"h2@gmail.com"
    },
    {
        id :3,
        email:"h3@gmail.com"
    }
]
// console.log(users[1].email);
// console.log(users[2].id); 

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('name'))

// De-structuring of the Objects

const course ={
    coursename :"Js in hindi",
    price : 999,
    courseInstructor :"hitesh"
}

const {courseInstructor: instructor} = course
// console.log(instructor)



// {
//     "name ": "hitesh",
//     "courseName":"js in hindi",
//     "price" : "free"
// }

[   {},
    {},
    {}
]



