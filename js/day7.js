// ------------------------------------------

// Q36

// Word without First Character
// Create a function that takes a word and returns the new word without including the first character.
function newWord(str){
    // var a = ""
    // for(var i = 1 ; i < str.length ; i++ ){
    //    a += str[i]
    // }
    // return a
    return str.slice(1)
}

// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))


// ------------------------------------------

// Q37

// Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

function concat(arr1,arr2){
    // var a = arr1
    // for(var i = 0 ; i < arr2.length ; i++){
    //     a.push(arr2[i])
    // }
    // return a
    return arr1.concat(arr2)
}

// console.log(concat([1, 3, 5], [2, 6, 8]))
// console.log(concat([7, 8], [10, 9, 1, 1, 2]))
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

// ------------------------------------------

// Q38

// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.
function search(arr,finds){
    for(var i = 0 ; i < arr.length ; i++){
       if(arr[i] == finds)
       return i
    }
    return -1
}
// console.log(search([1, 5, 3], 5))
// console.log(search([9, 8, 3], 3))
// console.log(search([1, 2, 3], 4))
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))

// ------------------------------------------

// Q39

// Number of Stickers
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.
function howManyStickers(n){
      return (n * n) * 6
}

// console.log(howManyStickers(1))
// console.log(howManyStickers(2))
// console.log(howManyStickers(3))

// ------------------------------------------

// Q40

// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

function check(arr,including){
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] == including)
    return true
    }
    return false
}
console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))