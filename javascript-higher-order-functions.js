// Javascript Higher Order Functions 5/15/2023

// Built in method: premade function made to easily do an action
// Syntactical sugar: A piece of code created to make a language sweeter
// Iteration: process of repeating something until a condition is met


// Higher Order Functions:
  // Allow us to iterate on arrays
  // A function that takes a function as an arguement
  // Replace some for loops - use less cpu

  // Anonymous function - a function without a name:
    //  () => {}

// ______________
// .forEach
    // great if you want to do something to each element in an array

// [3, 4, 5, 6].forEach(() => {})

// Required argmuent in HOF: value (think array[i])
// Optional arguments in HOF:
    // index (think i)
    // array - accesses the original array being iterated on


    // [3, 4, 5, 6].forEach(value => {
    //   console.log(value)
    // })

    [3, 4, 5, 6].forEach((value, index, array) => {
      console.log("value:", value)
      console.log("index:", index)
      console.log("array:", array)
    })

// ______________
// .map - iterates over each element in the array and returns a new array with the same length
      // Similar to forEach, however it does return something - so without our return, we get back undefined
      // great for modifying or displaying each value in an array (like github)

const myArray = [4, 5, 6, 7]

// const mappedArray = myArray.map(value => {
//   return value * 2
// })

const mappedArray = myArray.map(value => value * 2)

console.log(mappedArray) // [ 8, 10, 12, 14 ]
console.log(myArray) // [ 4, 5, 6, 7 ]


// Create a function that takes in an array of numbers that will display "even" if value is even, and "odd" if value is odd

const evenOrOdd = (array) => {
  return array.map(value => {
    if(value % 2 === 0) {
      return "even"
    } else if(value % 2 !== 0) {
      return "odd"
    } else {
      return "Ooops, something went wrong"
    }
  })
}

// const evenOrOdd = (array) => {
//   return array.map(value => {
//     if(value % 2 === 0) {

//     } else if(value % 2 !== 0) {
//       return "odd"
//     } else {
//       return "Ooops, something went wrong"
//     }
//   })
// } // No return means we will get back undefined in our console

console.log(evenOrOdd(myArray)) // [ 'even', 'odd', 'even', 'odd' ]
console.log(evenOrOdd([2, 4, 90, 23, 65])) // [ 'even', 'even', 'even', 'odd', 'odd' ]

// ______________
// .filter - filters out what we don't want and keeps what we do want based on a condition

  // Has a built in if statement
  // Return a subset of the array

  let oddFilteredArray = myArray.filter(value => value % 2 !== 0) // [ 5, 7 ]
  console.log(oddFilteredArray)

  let evenFilteredArray = myArray.filter(value => {
    return value % 2 === 0
  })
  console.log(evenFilteredArray) // [ 4, 6 ]

  let evenMappedArray = evenFilteredArray.map(value => value * 2)
  console.log(evenMappedArray) // [ 8, 12 ]


  let evenMultByTwo = myArray.filter(value => value % 2 === 0).map(value => value * 2)
  console.log(evenMultByTwo) // [ 8, 12 ]



// Create the code that acts on an array of mixed data and returns only the given data type based on user input

// input: mixed array, data type
const mixedData = [3, "hi", true, 50, 4, null, "Delta"]

const showMyData = (array, dataType) => {
  return array.filter(value => {
    return typeof value === dataType
  })
}


console.log(showMyData(mixedData, "string")) // [ 'hi', 'Delta' ]
console.log(showMyData(mixedData, "number")) // [ 3, 50, 4 ]
console.log(showMyData(mixedData, "boolean")) // [ true ]

console.log(typeof true) // boolean



// .sort() - built in method
// .sort((a, b) => a - b) - higher order function


// Create a function that takes in two arrays and returns one array with no duplicates (and is only a string)

const array1 = ["hi", 3, 90, 5, true, 3, "hello"]
const array2 = [85, 45, 90, 3, true, "hi"]

// Psuedocode
// 1. Create a function called noDuplicates takes in two arrays (firstArr, secondArr)
// 2. Use concat to join arrays together ["hi", 3, 90, 5, true, 3, "hello", 85, 45, 90, 3, true, "hi"]
// 3. Use filter to iterate over the concated array
  // a. Use indexOf which gives the postition of the first occurence of a value in a string
  // b. Check against the current index

// const noDuplicates = (firstArr, secondArr) => {
//   return firstArr.concat(secondArr).filter((value, index, array) => {
//     return array.indexOf(value) === index
//   })
// }

const noDuplicates = (firstArr, secondArr) => {
  let concatedArray = firstArr.concat(secondArr)
  return concatedArray.filter((value, index, array) => {
    return typeof value === "string" && array.indexOf(value) === index
  })
}

console.log(noDuplicates(array1, array2)) // [ 'hi', 3, 90, 5, true, 'hello', 85, 45 ]


// value = array[i]
// index = i


// ["hi", 3, 90, 5, true, 3, "hello", 85, 45, 90, 3, true, "hi"]

// array.indexOf("hi") === 0
// index === 12