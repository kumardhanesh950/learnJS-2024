const  Arr =[ 1,2,3,4,5]
for (const num of Arr) {
    // console.log(num);
    
}

const greeting = "Hello World"
for (const greet of greeting) {
    
    // console.log(`value of greet is ${greet}`) ;
    
    
}

// Maps
// const map = new Map()
// map.set('IND', "India")
// map.set('USA', "United Nations of America")
// map.set('Fr', "France")
// console.log(map)

//  for (const [ key ,value] of map) {
//     console.log(key, ":-", value);
    
//  }










const map= new Map()
map.set ('IND',"India")
map.set ('USA', "United State of America")
map.set ('Fr', "France")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value)
}

// we get 
// IND :- India
// USA :- United States of America
// Fr :- France


