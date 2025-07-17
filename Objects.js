let car = "Fiat";
JavaScript Objects
Objects are variables too. But objects can contain many values.

This code assigns many values (Fiat, 500, white) to an object named car:

Example
const car = {type:"Fiat", model:"500", color:"white"};
Note:
It is a common practice to declare objects with the const keyword.

Learn more about using const with objects in the chapter: JS Const.

JavaScript Object Definition
How to Define a JavaScript Object
Using an Object Literal
Using the new Keyword
Using an Object Constructor
JavaScript Object Literal
An object literal is a list of name:value pairs inside curly braces {}.

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
Note:
name:value pairs are also called key:value pairs.

object literals are also called object initializers.

Creating a JavaScript Object
These examples create a JavaScript object with 4 properties:

Examples
// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Spaces and line breaks are not important. An object initializer can span multiple lines:

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
This example creates an empty JavaScript object, and then adds 4 properties:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Using the new Keyword
This example create a new JavaScript object using new Object(), and then adds 4 properties:

Example
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
