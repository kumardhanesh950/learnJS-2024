const marvel_heros =["thor", "ironman","spiderman"]
const dc_heros =["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
//console.log(marvel_heros); // output => ['thor','ironman','spiderman',['superman','flash','batman']] yaha is ne array ko bi as a element leliya array me

// we can also access the values of insided array by below
//console.log(marvel_heros[3][1])    // => flash 

const allHeros = marvel_heros.concat(dc_heros)
 // yeh concat method hum ne use kiya 2 arrays ko concat kerne k liye but kiya ho agr hamare pas ziyada arrays ko concat kerna ho...then yeh concat method use kerna mushkil hojata
// console.log(allHeros) 


const myallHeros = [...marvel_heros,...dc_heros] // this is called spread operator method we can also concat more then many arrays
// console.log(myallHeros);

const another_array = [1,2,[3,4,5],5,6,[7,[8,9]]]
const another_real_array =another_array.flat(Infinity)
// console.log(another_real_array)

console.log(Array.isArray("hitesh"))    // here we are asking hitesh array he? we get boolean value in output
console.log(Array.from("hitesh"))   // yaha hum string me se ek array form ker rahe hen

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 ,score2, score3))   //[100, 200, 300] we can make array of different values 





