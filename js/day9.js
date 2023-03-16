// 46 ==> Reverse an Array
//     Write a function to reverse an array.
function reverse(arr) {
    // return arr.reverse()
    const newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}
// console.log(reverse([1, 2, 3, 4]))
// console.log(reverse([9, 9, 2, 3, 4]))


// 47 ==> ES6: Destructuring Arrays I
//     You can assign variables from arrays like this:
//         const arr = [1, 2, 3, 4, 5, 6]
//         let a = arr[0]
//         let b = arr[1]
//         console.log(a) // outputs 1
//         console.log(b) // outputs 2
//     With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax

function es6(arr) {
    const [a,,,b, ...c] = arr
    //  const a= arr[0]
    //  const b= arr[1]
    //  const c= arr[2]
    // console.log(a);
    // console.log(b);
    // console.log(c);
};

es6([1, 2, 3, 4, 5, 6])


// 48 ==> Using Ternary Operators
//     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
function yeah_nope(a){
    return (a ? 'yeah' : 'nope');
}
// console.log(yeah_nope(true))
// console.log(yeah_nope(false))

// 49 ==> Convert an Array to a String
//     Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr){
    // var str = ""
    // for(let i = 0 ; i < arr.length ; i++){
    //     str += arr[i]
    // }
    // return str
    return arr.join('')
}
// console.log(arrayToString([1, 2, 3, 4, 5, 6]))
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))



// 50 ==> Return the Last Element in an Array
//     Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr){
    // return arr.splice(-1)
    // return arr.slice(-1)
    // return arr.pop()
    // return arr[arr.length-1]
    // var bb = 0
    // for(let a = -1 ; a <= arr.length ; a++){
    // }
    // return a 
    for(let i = 0; i< arr.length;i++){
        if(i === arr.length-1)
        return arr[i];
    }
}
console.log(getLastItem([1, 2, 3]))
console.log(getLastItem(["cat", "dog", "duck"]))
console.log(getLastItem([true, false, true]))
