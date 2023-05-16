// Javascript Testing - Jest 5/16/2023

// Jest - a JS testing framework, collection of files managed by yarn 
// Yarn - a package manager
// package manager - allows us to share code and dependencies

// Process
  // mkdir
  // cd into directory
  // $ yarn add jest 

// Three new things
  // node modules, package.json, and yarn.lock

// TDD - Test Driven Development

// The process
  // Red - write the test, run the testing suit and see a failing test (good failure)
  // Green - write the code, run the test to see it pass
    // $ yarn test
  // Refactor - refactor if necessary 

// Prompt: Create a function called greeter that returns a string that says "Hi Delta 2023!"

// a describe method that lists the name of the function OR naming of the particular test
describe("greeter", () => {
  // an it method, nested within the describe block, describes what the function does
  it("returns a string that says 'Hi Delta 2023!'", () => {
  // expect will invoke the function and compare the result to a predetermined output using the .toEqual matcher
    expect(greeter()).toEqual("Hi Delta 2023!")
  })
})

// ReferenceError: greeter is not defined
// Our test is writtend and tried to invoke the function called greeter, but could not find it

const greeter = () => {
  return "Hi Delta 2023!"
}

// Write a test for a function that logs "help others" if you do understand or "ask questions" if you do not understand

// Input: "yes"
// Output: "help others"

// Input: "no"
// Output: "ask questions"

describe("answer", () => {
  it("returns help others or ask questions based on input", () => {
    expect(answer("yes")).toEqual("help others")
    expect(answer("no")).toEqual("ask questions")
    expect(answer("crazy")).toEqual("need a yes or no")
  })
})

// ReferenceError: answer is not defined

// Pseudocode
  // create a function called answer that takes in a string as an argument
  // write a conditional statement to evaluate if the string equals "yes"
    // return "help others"
  // otherwise evaluate if string equals "no"
    // return "ask questions"

  const answer = (string) => {
    if(string === "yes") {
      return "help others"
    } else if(string === "no") {
      return "ask questions"
    } else {
      return "need a yes or no"
    }
  }

  
  // Create a function that takes in an array and a string and appends the string to the end of the array

  // Input: ["take notes", "practice", "being punctual", "study"], "ask questions"
  // Output: ["take notes", "practice", "being punctual", "study", "ask questions"]

  describe("becomeADeveloper", () => {
    it("adds ask questions to the end of an array", () => {
      let developerList = ["take notes", "practice", "being punctual", "study"]
      let developerString = "ask questions"
      let result = ["take notes", "practice", "being punctual", "study", "ask questions"]
      expect(becomeADeveloper(developerList, developerString)).toEqual(result)
    })
  })

 
  const becomeADeveloper = (array, string) => {
    return array.concat(string)
  }

