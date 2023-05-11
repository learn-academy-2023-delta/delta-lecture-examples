// Javascript Arrays 5/11/2023

// Arrays
    // Non-primitive data types that store collections of ordered data
    // Arrays contain any type of information that is a valid data type
    // Consists of elements inside of a brackets [] called bracket notation
    // Each element has a value and an index (starting at zero)


// let learnStaff = ["Sarah", "Elyse", "Gene", "Trish", "Charlean", "Nicole", "Will", "Chris"]

// console.log(learnStaff[0])
// console.log(learnStaff[2])

// ____________________
// Changing Elements

let learnStaff = ["Sarah", "Else", "Gene", "Trish", "Charlean", "Nicole", "Will", "Chris"]


learnStaff[1] = "Elyse"
console.log(learnStaff)


// ____________________
// Length Property

  // Length of array is amount of elements in array (last index + 1)

  console.log(learnStaff.length) // 8

// ____________________
// Built-in Methods

  // builtInMethod(argument)

  // Mutators - changes the data (setter methods)
    // Sometimes output of action is not the array

    // .push() - adds value to end of array
      // value is added by being passed as an argument
      // Output of this method is the length of the new array

    console.log(learnStaff.push("Paul"))
    console.log(learnStaff.push("Joe"))
    console.log(learnStaff)


    // .pop() - removes the last value in an array
      // returns the value removed

    console.log(learnStaff.pop())
    console.log(learnStaff)

  // .reverse() - reverses the array
    // returns the actual array
    console.log(learnStaff.reverse())

  // .sort() - alphabetically organizes strings
  let learnInstructionStaff = ["Sarah", "Elyse", "Gene", "Trish", "Charlean", "Nicole", "Will", "Chris"]

  // console.log(learnInstructionStaff.sort())

  let numsArray = [45, 89, 23, 9, 100] // [ 100, 23, 45, 89, 9 ]
  console.log(numsArray.sort())
  console.log(numsArray.sort((a, b) => a - b)) // [ 9, 23, 45, 89, 100 ]


  // Accessors - get's data (getter methods)

  // .indexOf() - returns the index number of the first instance of that value
  // If value does not exist in array, return is -1

  console.log(learnInstructionStaff.indexOf("Nicole")) // 5
  console.log(learnInstructionStaff.indexOf("Trish")) // 3

  // .slice() - creates a subset of the array
    // Takes arguement of starting index, and optional argument of where to end subset

  let deltaInstructionStaff = learnInstructionStaff.slice(1, 3)
  console.log(deltaInstructionStaff) // [ 'Elyse', 'Gene' ]
  console.log(learnInstructionStaff)


  // .concat() - merges two arrays together
    // can be used to add values to an array without mutating

    let bravoTeam = ["Trish", "Will"]
    let charlieTeam = ["Charlean", "Nicole"]
    let deltaTeam = ["Elyse", "Gene"]

    console.log(bravoTeam.concat(charlieTeam, deltaTeam)) // [ 'Trish', 'Will', 'Charlean', 'Nicole', 'Elyse', 'Gene' ]
    console.log(bravoTeam.concat(charlieTeam, "Hello")) // [ 'Trish', 'Will', 'Charlean', 'Nicole', 'Hello' ]

    console.log(bravoTeam) // [ 'Trish', 'Will' ]


  // You can also chain methods onto each other

// Strings to Arrays and Back Again

  // .split() - takes a string and turns it to an array
    // takes an argument of where to split the string determining what is at each index

    let greeter = "Hello Delta class!"

    console.log(greeter.split()) // [ 'Hello Delta class!' ]

    console.log(greeter.split("")) // ['H', 'e', 'l', 'l', 'o',' ', 'D','e', 'l', 't','a', ' ', 'c', 'l', 'a','s', 's', '!']

    console.log(greeter.split(" ")) // [ 'Hello', 'Delta', 'class!' ]


    // .join() - takes an array and turns it to a string
    // takes an argument that determines what is in between each character in the string

    let greeterArray = ["Hello", "Delta", "class"]
    console.log(greeterArray.join()) // Hello,Delta,class
    console.log(greeterArray.join("")) // HelloDeltaclass
    console.log(greeterArray.join(" ")) // Hello Delta class
    console.log(greeterArray.join("-")) // Hello-Delta-class


// Array Destructuring - allows individual assignments of array values to variables
let myArray = ["Bruce", "Wayne", "Batman"]

let [firstName, lastName, role] = myArray
console.log(firstName) // Bruce
console.log(lastName) // Wayne
console.log(role) // Batman

console.log(myArray) // [ 'Bruce', 'Wayne', 'Batman' ]