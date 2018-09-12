/*
  Course 05 Day 6

    Arrow Functions
      Use the same structure with parameters and the execution block
      But leave off the function name, and the function keyword
      More often used as anonymous functions, passed in as callbacks to other methods.
      They can still be declared as function expressions(which means they're stored in a variable)

      ES5 Function:
        4 parts,
          1: function keyword
          2: function name
          3: parameter list
          4: Execution block
        function sayHello(name){
          console.log(`Hello, ${name}`);
        }

      ES5 Function Expression:
        Converting from ES5 function to function expression:
        Swap the function keyword and the function name
        Add an equal sign between them
        Declare a variable type

        let sayHello = function(name){
          console.log(`Hello, ${name}`);
        }

      ES6 Function Expression:
        Same as ES5, except you remove the function keyword and put an arrow between the parameter list and the execution block

        let sayHello = (name) => {
          console.log(`Hello, ${name}`);
        }

      Example of using ES6 function as a parameter:
        let ary = [1,2,3,4,5];

        // Double each item
        ary = ary.map(number => {
          return number * 2
        });


    Array Methods:
      ES6 array methods have a structure that they all share
      
      Each one of them passes a few parameters into their callbacks
        1: Current item - If a string/number you can freely modify it without worrying about affecting the original array. If an object/array, it follows the same rules as a normal function
        2: Index
        3: Entire array(not a copy, the original array)

      Common array methods:
        Map - Returns a new array of the same length as the array that called it
        Filter - Returns a new array of the same or less length as the array that called it
        Reduce - Returns exactly 1 item

*/

// Map

// Find the square root of each item in the array
let squareAry = [1, 4, 9, 16, 25, 36, 49];

function findSquareRoot(square) {
  return Math.sqrt(square);
}

let rootAry = squareAry.map(square => Math.sqrt(square)); // Passes in an anonymous function
let rootAry = squareAry.map(findSquareRoot); // Passes in the declared function above

console.log(rootAry);

// Recreating the map method
function ourMap(ary, callback) {
  // Create the new array to be sent back to the caller
  let newAry = [];

  // Build the new array, using the result of the callback
  for (let i = 0; i < ary.length; i++) {
    // Get the result of the callback, based on the parameters we pass in. Do this for every item no matter what
    let newItem = callback(ary[i], i, ary);
    // Add the new item to the array
    newAry.push(newItem);
  }

  // Return the new array
  return newAry;
}

let rootAry = ourMap(squareAry, square => Math.sqrt(square)); // Passes in an anonymous function

let secondAry = ['First', 'Second', 'Third'];

let example = ourMap(secondAry, (item, i) => {
  return `${item} is at index: ${i}`;
});
let example2 = secondAry.map((item, i) => `${item} is at index: ${i}`);

/*
  Filter:
    Same structure as map with the callback as the parameter

    Returns a new array of unchanged items, but chooses/filters out some of the items based on the result of the callback.
    If the callback for an item results as truthy, we add it to our new array
    If the callback for an item results as falsy, we skip that item and do not add it to our new array

*/

let numAry = [1, 3, 6, 2, 6, 8, 3, 13];
// Find even numbers
// if(num % 2 === 0) // If a number is divisible by 2(even)
let evenNumbers = numAry.filter(num => num % 2 === 0);

// Find odd numbers
// if(num % 2 === 1)
// if(num % 2 !== 0)
// if(!(num % 2))
let oddNumbers = numAry.filter(num => num % 2 === 1);

// Find short words (words less than 7 characters)
let wordAry = [
  'Paradoxical',
  'Hypotenuse',
  'Hello',
  'Supercalifragilisticespialidocious',
  'Hi',
  'Number'
];

// if(word.length < 7)
let shortWords = wordAry.filter(word => word.length < 7);
