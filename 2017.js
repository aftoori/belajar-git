let text = "5";
text = text.padStart(4,0);
let text = "5";
text = text.padEnd(4,0);
JavaScript Object Entries
ECMAScript 2017 added the Object.entries() method to objects.

Object.entries() returns an array of the key/value pairs in an object:

Example
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.entries(person);
Object.entries() makes it simple to use objects in loops:

Example
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
Object.entries() also makes it simple to convert objects to maps:

Example
const fruits = {Bananas:300, Oranges:200, Apples:500};

const myMap = new Map(Object.entries(fruits));
JavaScript Object Values
Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

Example
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person);
ADVERTISEMENT

JavaScript Async Functions
Waiting for a Timeout
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

JavaScript Trailing Commas
JavaScript allows trailing commas wherever a comma-separated list of values is accepted.

In Array and Object Literals, Function Calls, Parameters, Imports and Exports.

Example
function myFunc(x,,,) {};
const myArr = [1,2,3,4,,,];
const myObj = {fname: John, age:50,,,};


 
Track your progress - it's free!
 
