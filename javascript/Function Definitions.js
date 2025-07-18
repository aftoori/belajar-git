function myFunction(a, b) {
  return a * b;
}
Semicolons are used to separate executable JavaScript statements.
Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

Function Expressions
A JavaScript function can also be defined using an expression.

A function expression can be stored in a variable:

Example
const x = function (a, b) {return a * b};
After a function expression has been stored in a variable, the variable can be used as a function:

Example
const x = function (a, b) {return a * b};
let z = x(4, 3);
The function above is actually an anonymous function (a function without a name).

Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

The function above ends with a semicolon because it is a part of an executable statement.


The Function() Constructor
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.

Functions can also be defined with a built-in JavaScript function constructor called Function().

Example
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
You actually don't have to use the function constructor. The example above is the same as writing:

Example
const myFunction = function (a, b) {return a * b};

let x = myFunction(4, 3);
Most of the time, you can avoid using the new keyword in JavaScript.

Function Hoisting
Earlier in this tutorial, you learned about "hoisting" (JavaScript Hoisting).

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

Hoisting applies to variable declarations and to function declarations.

Because of this, JavaScript functions can be called before they are declared:

myFunction(5);

function myFunction(y) {
  return y * y;
}

(function () {
  let x = "Hello!!";  // I will invoke myself
})();
The function above is actually an anonymous self-invoking function (function without name).

Functions Can Be Used as Values
JavaScript functions can be used as values:

Example
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3);
JavaScript functions can be used in expressions:

Example
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3) * 2;

function myFunction(a, b) {
  return arguments.length;
}

function myFunction(a, b) {
  return a * b;
}


// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;

const x = (x, y) => { return x * y };
Arrow functions are not supported in IE11 or earlier.

