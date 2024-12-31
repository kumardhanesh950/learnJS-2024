let myDate = new Date()
// console.log(myDate)   //output 2023-12-31T0:27:58.293Z
// console.log(myDate.toDateString());   // tue Dec 31 2024 
// console.log(myDate.toISOString());    // 2024-12-31T07:30:56.740Z
// console.log(myDate.toJSON());        // 2024-12-31T07:30:56.740Z
// console.log(myDate.toLocaleDateString()); //   12/31/2024
// console.log(myDate.toLocaleString());   //12/31/2024, 7:36:31 AM
// console.log(myDate.toLocaleTimeString()); // 7:37:48 AM
// console.log(myDate.toString());  // Tue Dec 31 2024 07:38:28 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString()); //07:40:28 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());  //Tue, 31 Dec 2024 07:41:43 GMT
// console.log(myDate.getTimezoneOffset()); //0
// console.log(myDate.getHours());  //7

// let myCreatedDate = new Date (2024, 11,31) // Tue Dec 31 2024
//let myCreatedDate = new Date (2024, 11,31,12,10,1) //  Tue Dec 31 2024 12:10:01 GMT+0000(Coordinated Universal Time)
let myCreatedDate= new Date ("12-31-2024") 
 // this is other form to in which we write firstly month then date and year we get output Tue Dec 31 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(myCreatedDate.toString())
let myTimeStamps = Date.now()
// console.log(myTimeStamps)  //1735633060680  these are milliSeconds since 1 Jan 1970
// console.log( myCreatedDate.getTime())


console.log(Date.now()) // we get output in millisecond 1735633796599 then we can convert it into seconds by given below
// console.log(Math.floor(Date.now()/1000))   // we get 17357634068 seconds

let MynewDate= new Date()

console.log(MynewDate.getDate())
console.log(MynewDate.getDay())
console.log(MynewDate.getMonth())








