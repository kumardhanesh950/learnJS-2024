// const name ="hitesh"
const repoCount =50
// console.log(name +repoCount)
// But we've another method for string interpolation that is given below

// console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

// let gamename= new String("hiteshhc")

// // console.log(gamename[0]);  // we can access later of string by using index
// // console.log(gamename.__proto__);
// // console.log(gamename.length)
// // toUpper = gamename.toLocaleUpperCase()
// // console.log(toUpper)
// // console.log(gamename)
// // console.log(gamename.charAt(2))


// const newString = gamename.substring(0,4)
// console.log(newString);  //output hite

// const anotherString =gamename.slice(0,3)
// console.log(anotherString);



const gamename = new String("hitesh-hc")
// console.log(gamename);
// console.log(gamename[0]);

// console.log(gamename.__proto__);
// console.log(gamename.length);

// console.log(gamename.charAt(3));
// console.log(gamename.indexOf("e"));


const newString =gamename.substring(0,4)
//  console.log(newString);
 

const anotherString = gamename.slice(-8,4)
// console.log(anotherString);


const newStringone ="         hitesh .  "  
// console.log(newStringone.trim());  //removes the extra unneccessary spaces 

const url ="https:hitesh.com/hitesh%20choudhry"
// console.log(url.replace("%20", "-"));   
// we get result=> https:hitesh.com/hitesh-20choudhry

// console.log(url.includes("hitesh"));
// here we are checking that is hitesh keyword is available in url? we get boolean in result

console.log(gamename.split("-"))
// yaha hum array bana rahe hen gamename string ka on basis of -
// we get output ['hitesh', 'hc']














