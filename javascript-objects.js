// Javascript Objects 5/17/2023

// Primitive Data Types:
  // Numbers
  // String
  // Boolean
  // Undefined
  // Null
  // Symbol

console.log(typeof [1, 2, 3]) // object

// Object - data type that is a collection of things
    // Arrays - index stores location of values
    // Objects - uses key value pairs
        // Stored inside of curlies
        // Key value pairs

// CSS is made up of objects
// h1 {
//   color: "purple"
// }

// let myObject = {key1: "value1", key2: "value2", key3: "value3"}

// Symbol data type: unique identifier, often used as a key in objects
    // Acts like a variable
    // Key holds the value
    // Value is any valid Javascript datatype

    let myObject = {
      key1: "value1", 
      key2: "value2", 
      key3: "value3",
      key4: 7,
      key5: true
    }

  console.log(myObject)  // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 7, key5: true }


// _______________
// Accessing values in an object:
    // Use dot notation on the object with the key

  console.log(myObject.key2) // value2
  console.log(myObject.key5) // true

  myObject.key5 = false

  console.log(myObject.key5) // false

// _______________
// Nested Objects

let breakfast = {
  item1: "Bacon",
  item2: "Eggs",
  item3: "Toast",
  breakfastBurrito: {
    ingredient1: "Tortilla",
    ingredient2: "eggs",
    ingredient3: "french fries",
    ingredient4: "cheese"
  },
  item5: "Eggs Benedict",
  drink: {
    beverage1: "coffee",
    beverage2: "orange juice",
    beverage3: "milk",
    beverage4: "lemonaide",
    smoothies: {
      smoothie1: "mango",
      smoothie2: "mango pinapple",
      smoothie3: "strawberry banana"
    }
  }
}

// console.log(breakfast.smoothie1) // undefined
console.log(breakfast.drink.smoothies.smoothie1) // mango

// _______________
// Object Destructuring

// Destructuring - creating a defined pathway through a nested object

let { smoothie1, smoothie2, somethingElse } = breakfast.drink.smoothies

console.log(smoothie1) // mango
console.log(smoothie2) // mango pinapple
console.log(somethingElse) // undefined

smoothie1 = "peach"
console.log(smoothie1) // peach


// Methods - functions or behavior that belongs to an object

// "this" - referencing the object name when you are inside the object
let numbers = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  }
}

console.log(numbers.num2) // 10

console.log(numbers.addUp()) // 30


// numbers.num4 = 20

// console.log(numbers)