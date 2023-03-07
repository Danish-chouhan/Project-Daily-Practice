// ------------------------------------------

// Q41

//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptIntoMovie(age,supervision){
    return (age >=15 || supervision == true)
}

// console.log(acceptIntoMovie(14, true))
// console.log(acceptIntoMovie(14, false))
// console.log(acceptIntoMovie(16, false))


// ------------------------------------------

// Q42

// Create a function that evaluates an equation.
function eq(str){
    return eval(str)
}

// console.log(eq("1+2"))
// console.log(eq("6/(9-7)"))
// console.log(eq("3+2-4"))

// ------------------------------------------

// Q43

// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName,lastName){
    return `${lastName} ${firstName}`
}
// console.log(concatName("First", "Last"))
// console.log(concatName("John", "Doe"))
// console.log(concatName("Mary", "Jane"))

// ------------------------------------------

// Q44

// Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
//  posCom(1) ➞ 2
//  posCom(3) ➞ 8
//  posCom(10) ➞ 1024

function posCom(num){
    return 2**num
}
// console.log(posCom(1));
// console.log(posCom(3));
// console.log(posCom(10));

// ------------------------------------------

// Q45

// Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
function areaShape(base,height,str){
    if(str == "triangle")return 0.5 * (base*height)
    if(str == "parallelogram")return (base * height)
}

// console.log(areaShape(2, 3, "triangle"))
// console.log(areaShape(8, 6, "parallelogram"))
// console.log(areaShape(2.9, 1.3, "parallelogram"))

// ------------------------------------------