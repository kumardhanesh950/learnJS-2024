//array
const myArr =[0, 1, 2, 3, 4, 5] 
// console.log(myArr)

const myHeros =["shaktiman","nagraj"]
//another method to declare array 
const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr2[0])


//Array methods
// myArr.push(6)   // adds element in last of the array
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()            //removes the last element of array
// console.log(myArr);

//  myArr.unshift(9) // adds element in start of the array
//  console.log(myArr);
 
//  myArr.shift()    //removes the first element
// console.log(myArr);

// console.log(myArr.includes(0)) 
//yeh questioning method he yaha hum puch rahe hen 0 array me included he? we get value true if it is included otherwise we get -1 if the value is not included
// console.log(myArr.indexOf(3)) 
// here we are asking the index of 3 in the array 

const newArr = myArr.join()
// console.log(myArr)   // output [0,1,2,3,4,5]   <= its an array 
// console.log(newArr)  //0,1,2,3,4,5             <= this is String
// we can also check the type of newArr
// console.log(typeof newArr)   // string 



//slice and Splice
console.log("Arry", myArr)

const myNewArr = myArr.slice(1,3) 
console.log(myNewArr)    //[1,2]
console.log("After using slice change in original array", myArr) //[0,1,2,3,4,5]

const myNewArr2 =myArr.splice(1,3)
console.log(myNewArr2)   // we get [1,2,3]
console.log("After using splice change in original array",myArr)   // [0,4,5]


