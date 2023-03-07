// ------------------------------------------

// Q22

//  ==> Profitable Gamble
//     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//     profitableGamble(0.2, 50, 9) // true
//     profitableGamble(0.9, 1, 2) // false
//     profitableGamble(0.9, 3, 2) // true
//     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

const profitableGamble = (prob, prize, pay) => (prob * prize > pay)

// console.log(profitableGamble(0.2, 50, 9))
// console.log(profitableGamble(0.9, 1, 2))
// console.log(profitableGamble(0.9, 3, 2))

// ------------------------------------------

// Q23

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// frames(1, 1) // 60
// frames(10, 1) // 600
// frames(10, 25) // 15000
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
// Assume the screen produces 60 frames every second.
const frames = ((sec, frames) => sec * (60 * frames))

// console.log(frames(1,1))
// console.log(frames(10,1))
// console.log(frames(10,25))

// ------------------------------------------

// Q24

// 23 ==> Drinks Allowed?
//     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//     shouldServeDrinks(17, true) // false
//     shouldServeDrinks(19, false) // true
//     shouldServeDrinks(30, true) // false
//     Return true or false.
//     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.

const shouldServeDrinks = (age, Break) => (age >= 18 && Break == false)


// console.log(shouldServeDrinks(17,true));
// console.log(shouldServeDrinks(19,false));
// console.log(shouldServeDrinks(30,true));

// ------------------------------------------

// Q25

// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

const isEmpty = (str) => str === ''

console.log(isEmpty(""))  // true
console.log(isEmpty(" ")) // false
console.log(isEmpty("a")) // false
// A string containing only whitespaces " " does not count as empty.


// ------------------------------------------