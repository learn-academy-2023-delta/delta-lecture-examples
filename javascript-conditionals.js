// Javascript Conditionals Lecture

// situation where we can determine if the outcome is true or false (boolean)
// aka decision trees or if/else statements

//-------Equality Operators-----------

  // Strict Equality 
  // ===  Check if the data type and value match

  var myName = "Gene"

  console.log("Gene" === myName)

  var favNumber = 25

  console.log(favNumber === 25) // Output --> true
  console.log(favNumber === "25") // Output --> false

  // Loose Equality
  // ==  Check only the value
  // if necessary, will use type coercion (convert the value from one data type to another)

  console.log(favNumber == "25") // Output --> true

//-------Relational Operators-----------

  // Is this...
  // greater than   >
  // less than      <
  // greater than or equal to    >=
  // less than or equal to       <=

  console.log(3 > 4) // false
  console.log(7 >= 3) // true
  console.log(7 >= 7) // true

//-------Logical Operators-----------

  //allow us to evaluate multiple statements in one condition

  // logical AND (&&)
  // will evaluate both statements and both must be true to equal true, if one is false, the output will be false

  var greeting = "hello"
  var number = 42

  console.log(98 > number && "hello" === greeting) // true + true = true
  console.log(21 > number && "hello" === greeting) // false + true = false

  // logical OR (||)
  // checks both conditions
    // as long as one is true, output will be true

  console.log(21 > number || "hello" === greeting) // false + true = true

// Negation
  // allows us to negate a statement by using the logical opposite
    // Bang operator   !

    console.log(number !== greeting) // true

// ----- If/else------

  // if is a keyword in javascript, built into the language
  // need to pass an evaluation to the if
  // use parentheses to pass the evaluation

  // if(condition is true) {
  //   perform this action
  // }

  if(true) {
    console.log("I'm true!!!")
  }

  // else - catch all
    // will only run if nothing else is true
    // does not require an evaluation

    if(false) {
      console.log("I'm true!!!")
    } else {
      console.log("Here is the else!")
    }

  var myTitle = "King of the North"
  if(myTitle === "King of the North") {
    console.log("All hail the rightful king!")
  } else {
    console.log("Hey!")
  }

  // else if - check for additional statements

  var num1 = 13
  var num2 = 12

  if(num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
  } else if(num1 < num2) {
    console.log(`${num1} is less than ${num2}`)
  } else if(num1 === num2) {
    console.log("The 2 numbers are the same")
  } else {
    console.log("Oops, can't make that evaluation! Try again with numbers!")
  }


  // ------- Couple of things to keep in mind ----------

  // String interpolation
    // use backticks `` instead of quotes
    // ${variableName}
    // allows us to insert variables into a string

  // Javascript will run line by line 
    // it will look for a condition to be true or for the else
    // as soon as one evaluation returns true, it will stop there and not check the additional evaluations
    // you could have two true statements, but only the first one will be ran

  // Indentation is important!
    // allows us to find mistakes more efficiently
    