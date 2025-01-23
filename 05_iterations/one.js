// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best value")
    }
    // console.log(element)
    
}
  // yaha hum loop laga 1 se 10 tak tables print ker rahe 
for (let i = 1; i <=10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j  +' = ' + i*j)
        
    }
    
}



const myHeros = [ "flash", "batman ", "superman"]
for (let i = 0; i < myHeros.length; i++) {
    const element = myHeros[i];
    // console.log(element)
}

for (let index = 1; index <= 20; index++) {
    if (index== 5) {
        console.log("5 is detected")
        break
    }
console.log(index)    
}
for (let index = 1; index <= 20; index++) {
    if (index== 5) {
        console.log("5 is detected")
        continue
    }
console.log(index)    
}