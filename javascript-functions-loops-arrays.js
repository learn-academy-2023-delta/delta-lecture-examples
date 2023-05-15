// Javascript Functions, Loops, and Arrays 5/15/2023

// Multiply each number in an array by 5

var myArrayOfNumbers = [2, 3, 4, 5, 6]

// const mult5 = (array) => {
//   return array * 5
// }

// console.log(mult5(myArrayOfNumbers)) 
// Output : NaN

// In order to multiply each number, we need to iterate over the array and access each element

// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i] * 5)
//   }
// }

// console.log(mult5(myArrayOfNumbers))
// Output : 
// 2
// 3
// 4
// 5
// 6
// undefined

// We get undefined because we have no return in our function

// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     return array[i] * 5
//   }
// }

// If our return is in the for loop, what will happen?
// console.log(mult5(myArrayOfNumbers))
// Output: 10 , it will only multiply that first value by 5 and return that number

// We need a way to store that value, for loops are great for counting but we can set a variable to an empty array to store those values

const mult5 = (array) => {
  let tempFive = []
  for(let i = 0; i < array.length; i++) {
    tempFive.push(array[i] * 5)
  }
  return tempFive
}


console.log(mult5(myArrayOfNumbers))
// console.log(mult5([2, 3, 4, 5, 6])) // same as above
// Output: [ 10, 15, 20, 25, 30 ]

console.log(mult5([12, 13, 14, 15, 16, 17, 18, 19]))
// output :[
//   60, 65, 70, 75,
//   80, 85, 90, 95
// ]


// const functionExample = () => {
  //   return "Hey Delta"
  // }
  
  // console.log(functionExample())
  
// Create a function that takes a set of data and adds each item to a sentence

  var nbaTeams = ["Los Angeles Lakers", "Denver Nuggets", "Miami Heat", "Boston Celtics"]

  // input : array, array of strings 
  // output : set of strings, specifically we want an array with sentences

  // Expected output: ["Los Angeles Lakers are the 2023 NBA champs!", "Denver Nuggets are the 2023 NBA champs!", "Miami Heat are the 2023 NBA champs!", "Boston Celtics are the 2023 NBA champs!"]

  // Pseudocode 
  // create a function that takes in an array
  // access each element in the array using iteration
  // modify the string
  // return a new array

  const nbaChamps = (array) => {
    let nbaWinners = []
    for(let i = 0; i < array.length; i++) {
      nbaWinners.push(`${array[i]} are the 2023 NBA champs!`)
    }
    return nbaWinners
  }

  console.log(nbaChamps(nbaTeams))