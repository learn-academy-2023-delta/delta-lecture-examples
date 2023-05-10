// Javascript Intro 5/10/2023

  // Javascript
      // Provides interaction with a user
      // Dynamically typed - data types can be changed while they are being used
      // Interpreted language - read at runtime
      // Scripting lanuage - logic can be read and understood by computers


// __________________
  // Data types
      // 6 Primitive data types - cannot be broken down into simpler form
        
      // Number
      // String
      // Boolean
      // Undefined
      // Null
      // Symbol 

  // __________________
  // Numbers
    // Can be either an integer or a float:
      // Integer: whole number
      8
      500
      // Float: decimal
      8.9

    // Can perform basic math functions
    // Will use order of operations (PEMDAS)
    // Addition +
    // Subtraction -
    // Multiplication *
    // Division /
    // Exponents **
    // Modulo % (return the remainder of a division operation)

  // __________________
  // Strings
    // Characters stored in quotes
    // Has length property
    // Indexed, zero indexing (count starts at 0)
      // "hello" h is at 0 index and o is at the 4th index

  // __________________
  // Booleans
    // True or False values
    // Are NOT strings
    // Great for comparisons

  // __________________
  // Undefined
    // The value of a variable that has been declared, but is not assigned yet

  // __________________
  // Null
    // The lack of a value

  // __________________
  // Symbols
    // Unique keys
    // We will talk about this in objects

// __________________
// Variables
  // stores data types or information
  // Declarations: var, let, const
  // Named using camelCasing - ex: helloWorldHowAreYou

  // const myName = "Elyse"
  // console.log(myName)

  // myName = "Elyse Montano"
  // console.log(myName)

  // let myName = "Elyse"
  // console.log(myName)

  // myName = "Elyse Montano"
  // console.log(myName)

  // var myName = "Elyse"
  // console.log(myName)

  // var myName = "Gene"
  // console.log(myName)

  // __________________
  // String Methods and Properties
    // Has the length property
    console.log("delta".length) // 5
    console.log("Hello awesome Delta!!".length) // 21

    // Extract a value at a given index
    console.log("hello"[0]) // h
    console.log("Delta"[3]) // t

  // __________________
  // Built in methods
    // Pieces of code that has be created as a shortcut for common actions
    // designed for a particular action on a specific data type
    // Use dot notation and parenthesis (can be passed additional information if needed)

    let greeting = "hello"

    // .toUpperCase() upcases all letters in string
    console.log(greeting.toUpperCase()) // HELLO

    // .charAt returns the character at a specific index
    console.log(greeting.charAt(1)) // e

    // .indexOf return the index of the first index of character
    console.log(greeting.indexOf("l")) // 2

    // .includes() returns a boolean value if a subset of the characters exists in the string
    console.log(greeting.includes("he"))  // true
    // .includes is case sensitive
    console.log(greeting.includes("He"))
    console.log(greeting.toLowerCase().includes("He".toLowerCase())) // true

    // .slice returns a subset of a string based on starting and ending index
    console.log(greeting.slice(1, 3))