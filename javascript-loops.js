// Javascript Loops 5/11/2023

// Iteration - the process of repeating something over and over again until a condition is met

//----------- Variable Declarations -----------
  // var - global scope, can be redeclared and reassigned

  if(true) {
    var myName = "Gene"
    console.log(myName)
  } 
  // this will work

  if(true) {
    var myName = "Gene"
  } 
  console.log(myName) // this will work as well

  // let - local scope, meaning it is only available inside the block it is defined in
    // can be reassigned, but not redeclared
    
  if(true) {
    let myName = "Gene"
  } 
  // console.log(myName) // this will not work

  let yourName = "Padge"
  // let yourName = "Chris"

  console.log(yourName) // error - Can't be redeclared

  // Reassignment is ok with let
  yourName = "Chris"

  console.log(yourName) // this will work

  // Additional example - this works!
  if(true) {
    let myName = "Gene"
      if(myName === "Gene") {
        console.log("Good question!")
      }
  } 

  // const - can not be redeclared or reassigned, also local scope

  const yourDog = "Bruno"
  // yourDog = "Kodi"

  console.log(yourDog) // TypeError: Assignment to constant variable.

  var anything = 0
  var anything = 1
  let example = "string"
  let example2 = "new string"
  const anyName = true

// -------- Anatomy of a loop ------------

  // Starting point  index = 0
  // Ending point    index < 10
  // How to get from start to finish  index = index + 1

  // can use index as a variable name

  // Long way of starting a for loop
  // for(let index = 0; index < 10; index = index + 1)

  // Can use i, shorthand

  for(let i = 0; i < 10; i++) {
    console.log(i)
  }

  // const numsArray = [5, 6, 7, 8, 9]
  // for(let i = 0; i < numsArray.length; i+= 2) {
  //   console.log("index:", i, "value:", numsArray[i])
  // }

  // Different way to increment
  // i += 2  ----> i = i + 2

  // console.log(numsArray[0])
  // console.log(numsArray[1])
  // console.log(numsArray[2])

  // We can implement logic in our for loops

  const numsArray = [5, 6, 7, 8, 9]
  for(let i = 0; i < numsArray.length; i++) {
    if(numsArray[i] % 2 !== 0) {
      console.log(`${numsArray[i]} is an odd number!`)
    }
  }
  
  // Output : 
  // 5 is an odd number!
  // 7 is an odd number!
  // 9 is an odd number!

  const myString = "HEY there Delta!"
  let count = 0
  for(let i = 0; i < myString.length; i++) {
    if(myString[i].toLowerCase() === "e") {
      count ++
    }
  }

  console.log(count) // Output ---> 4