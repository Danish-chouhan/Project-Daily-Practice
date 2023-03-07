// ------------------------------------------

// Q26

//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

const comp = (str1,str2) => str1.trim().length === str2.trim().length

// console.log(comp("AB", "CD"))
// console.log(comp("ABD", "DE"))
// console.log(comp("hello", "moien khan"))

// ------------------------------------------

// Q27

//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

const divisible = ((int)=> parseInt(int) % 100 == 0)

// console.log(divisible(1))
// console.log(divisible(1000))
// console.log(divisible(100))

// ------------------------------------------

// Q28

// Check if an Integer is Divisible By Five

const divisibleByFive = ((int)=> parseInt(int) % 5 == 0)

// console.log(divisibleByFive(5))
// console.log(divisibleByFive(-55))
// console.log(divisibleByFive(37))

// ------------------------------------------

// Q29

//     Create a function that takes a string and returns it as an integer.

const stringInt = ((val) => +(val))

// console.log(stringInt("6"))
// console.log(stringInt("1000"))
// console.log(stringInt("12"))

// ------------------------------------------

// Q30

// Divides Evenly
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

const dividesEvenly = ((a,b) => (a / b) % 2 == 0 )

// console.log(dividesEvenly(98, 7 ))
// console.log(dividesEvenly(85, 4 ))

// ------------------------------------------