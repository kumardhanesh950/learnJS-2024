const coding =["Js", "Ruby","Java","Python","cpp"]
coding.forEach(function (val) {
    // console.log(val);
    
})

// wev get output :
//Js
//Ruby
//Java
//Python
//cpp

coding.forEach((item)=>{
    // console.log(item)
})        

function printMe(item) {
    // console.log(item);
    
}
coding.forEach(printMe)


// note yaha function me sirf item ni hota hum or bi cheezen puch sakte hen like index, arr example given below

coding.forEach((item, index, arr)=>{
// console.log(item, index, arr);

})

//output :
// Js 0 ['Js', 'Ruby','Java','Python','cpp']
// Ruby 1 ['Js', 'Ruby','Java','Python','cpp']
// Java 2 ['Js', 'Ruby','Java','Python','cpp']
// Python 3 ['Js', 'Ruby','Java','Python','cpp']
// cpp 4 ['Js', 'Ruby','Java','Python','cpp']

// suppose hamare pas ek Array he jis me multiple objects [{},{},{}]hen then how to access those object value let's see below

const mycoding=[
    {
        languageName : "Javascript",
        languageFileName: "JS"
    },
    {
        languageName : "Java",
        languageFileName: "Java"
    },
    {
        languageName : "Python",
        languageFileName: "py"
    }

]


mycoding.forEach((item)=>{
    console.log(item.languageFileName, item.languageName);
    
})