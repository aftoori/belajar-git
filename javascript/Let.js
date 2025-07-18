{
  let x = 2;
}
// x can NOT be used here
Global Scope
Variables declared with the var always have Global Scope.

Variables declared with the var keyword can NOT have block scope:

Example
Variables declared with varinside a { } block can be accessed from outside the block:

{
  var x = 2;
}
// x CAN be used here
Cannot be Redeclared
Variables defined with let can not be redeclared.

You can not accidentally redeclare a variable declared with let.

With let you can not do this:

let x = "John Doe";

let x = 0;
Variables defined with var can be redeclared.

With var you can do this:

var x = "John Doe";

var x = 0;
Redeclaring Variables
Redeclaring a variable using the var keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:

Example
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
Redeclaring a variable using the let keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:

Example
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
Difference Between var, let and const
Scope	Redeclare	Reassign	Hoisted	Binds this
var	No	Yes	Yes	Yes	Yes
let	Yes	No	Yes	No	No
const	Yes	No	No	No	No
What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.

Browser Support
The let and const keywords are not supported in Internet Explorer 11 or earlier.

The following table defines the first browser versions with full support:

Chrome 49	Edge 12	Firefox 36	Safari 11	Opera 36
Mar, 2016	Jul, 2015	Jan, 2015	Sep, 2017	Mar, 2016
ADVERTISEMENT

Redeclaring
Redeclaring a JavaScript variable with var is allowed anywhere in a program:

Example
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
With let, redeclaring a variable in the same block is NOT allowed:

Example
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
Redeclaring a variable with let, in another block, IS allowed:

Example
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}
Let Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

Example
This is OK:

carName = "Volvo";
var carName;
