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



    Array Methods


*/
