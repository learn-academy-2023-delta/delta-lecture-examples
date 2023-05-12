// JavaScript Functions 5/12/2023

// snippets of code functionality that run on command

// functions give you control over when and how ofter your code runs
// reusable, produce an output

// encapsulation - your function should only rely on the code that is inside the code machine

// arrow function - the type of function we use at LEARN

// anatomy of an arrow function
// const - variable declaration
// name - camelCase, communicate intent
// = - assignment operator
// () - indicate action (or behavior)
// => - arrow function syntax
// {} - curly brace, create scope, indicate executable actions
// return - what is the output?
// function invocation, invoke our function, function call
// console.log on the invocation

// const coffeeMaker = () => {
//   return "coffee is made"
// }

// console.log(coffeeMaker())
// --> undefined
// --> coffee is made

// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())

// function now has a parameter - local variable to the function
// const coffeeMaker = (coffeeType) => {
//   return `${coffeeType} is made`
// }

// console.log(coffeeMaker())
// --> undefined is made
// console.log(coffeeMaker("tea"))
// --> tea is made

// the value of the parameter is called an argument
// console.log(coffeeMaker("donut shot"))
// console.log(coffeeMaker("black"))

// console.log(coffeeType) --> gives an error
const coffee = "latte"
// console.log(coffeeMaker("latte"))
// console.log(coffeeMaker(coffee))

// const coffeeMaker = (coffeeType, coffeeSize) => {
//   return `Your ${coffeeSize} ${coffeeType} is made`
// }

// console.log(coffeeMaker("tea", "large"))
// --> Your large tea is made
// console.log(coffeeMaker(coffee))
// --> Your undefined latte is made

// Pseudo code - writing out code in regular english words, creating a to do list

// purpose - make a coffee order that returns a receipt line with price
// input - coffeeType (string), coffeeSize (string)
// output - coffeeType and the price (string)
// small - $4, if size is small, price is $4
// medium - $5, if size medium, price is $5
// large $6, if size is large, price is $6

const coffeeMaker = (coffeeType, coffeeSize) => {
  // small - $4, if size is small, price is $4
  if (coffeeSize.toLowerCase() === "small") {
    return `Your ${coffeeType} is $4.`
  }
  // medium - $5, if size medium, price is $5
  else if (coffeeSize.toLowerCase() === "medium") {
    return `Your ${coffeeType} is $5.`
  }
  // large $6, if size is large, price is $6
  else if (coffeeSize.toLowerCase() === "large") {
    return `Your ${coffeeType} is $6.`
  } else {
    return "Something went wrong."
  }
}
console.log(coffeeMaker("latte", "small"))
console.log(coffeeMaker("donut shot", "medium"))
console.log(coffeeMaker("tea", "large"))
console.log(coffeeMaker("tea", "Large"))
