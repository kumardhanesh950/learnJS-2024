const myObj ={
    Js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    Swift : "Swift by Apple"
} 

for (const key in myObj) {
    // console.log(`${key} shortcut for ${myObj[key]}`)
    
}

//now let's check k forin loop array k liye bi work kerta h?

const programming =["JS", "Rb","Py","Java","cpp"]
for (const key in programming) {
   
        // console.log(key);
         //=> we get output
        //  0
        //  1
        //  2
        //  3
        //  4

        // console.log(programming[key])  
        // we get output
        // JS
        // Rb
        // Py
        // Java
        // cpp
    }

    // lets's check can we use forin loop on map


const map= new Map()
map.set ('IND',"India")
map.set ('USA', "United State of America")
map.set ('Fr', "France")
for (const key in map) {
    
       console.log(key) 
}
// here we used forin loop on map but get output nothing because map is non- iterable obj



