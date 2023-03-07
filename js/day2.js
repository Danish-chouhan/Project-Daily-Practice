// -------------------------------------

function giveMeSomething(str) {
    return `something ${str}`
}

// console.log(giveMeSomething("is better than nothing")) // "something is better than nothing"
// console.log(giveMeSomething("Bob Jane")) // "something Bob Jane"
// console.log(giveMeSomething("something")) // "something something"

// -------------------------------------

// Area of a Triangle`
function triArea(base, height) {
    return 1 / 2 * (base * height)
}

// console.log(triArea(3, 2)) // 3
// console.log(triArea(7, 4)) // 14
// console.log(triArea(10, 10)) // 50
// 1/2 × b × h


// -------------------------------------
function howManySeconds(hours) {
    return 3600 * hours
}

// console.log(howManySeconds(2) )// 7200
// console.log(howManySeconds(10)) // 36000
// console.log(howManySeconds(24)) // 86400

// -------------------------------------

const getFirstValue = (arr => arr[0])

// console.log(getFirstValue([1, 2, 3]) )// 1
// console.log(getFirstValue([80, 5, 100]) )// 80
// console.log(getFirstValue([-500, 0, 50]) )// -500

// -------------------------------------

function nextEdge(num1, num2) {
    return (num1 + num2) - 1;
}

// console.log(nextEdge(8, 10)) // 17
// console.log(nextEdge(5, 7)) // 11
// console.log(nextEdge(9, 2)) // 10

// -------------------------------------
function findPerimeter(num1, num2) {
    return 2 * (num1 + num2)
}

// console.log(findPerimeter(6, 7)  )// 26
// console.log(findPerimeter(20, 10)) // 60
// console.log(findPerimeter(2, 9)  )// 22

// -------------------------------------

function remainder(num1,num2){
    return num1 % num2
}

// console.log(remainder(1, 3) )// 1
// console.log(remainder(3, 4) )// 3
// console.log(remainder(-9, 45) )// -9
// console.log(remainder(5, 5) )// 0
// -------------------------------------