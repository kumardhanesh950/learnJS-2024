let score = "33abc"         
// when we put 33abc and we try to convert it in number it will be converted but when we check the actual valueinNUmber it is NaN(not a number) also same in undefined case
//note ; when we put null in score it will convert it in num which is 0
// console.log(typeof score)
// console.log(typeof(score))
let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)


//"33" => 33
//"33abc" => NaN (but iska type number hi he)
// null => 0 
//true = 1;false =0;

// let convert number in to boolean
let isloggedIn =1;
let numtoBoolean = Boolean(isloggedIn)
// console.log(numtoBoolean)
// console.log(typeof numtoBoolean)

// 1 => true
//0 => false
// "" => false
// "hitesh" => true


//now num to string 
let someNum = 33
let someNumToString = String(someNum)
// console.log(someNumToString)
// console.log(typeof someNumToString)

// +++++++++++++++++++++++++++++++Operations+++++++++++++++++++++++++++++++++++++++
let value = 3 
let negOfvalue = -value
// console.log(negOfvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2);
// console.log(2/2);
// console.log(2%3);


let str1 = "hello"
let str2 =" hitesh"
let str3 =str1+str2
// console.log(str3);


// console.log("1"+2)
// console.log(1 +"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(1+2+"2"+2)
//Note; we can see above jab hum operations ker rahe hen to is me jab beech me koi string ati he to uske k bad agay wale sare numbers wo as a string treat kerta he.



console.log(+true)  //output will be 1 but this is not ethical to use ...
console.log(+"");   //output will be 0 but this is not ethical to use ...


