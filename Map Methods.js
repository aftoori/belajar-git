// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
Map.get()
You get the value of a key in a map with the get() method

Example
fruits.get("apples");
Map.set()
You can add elements to a map with the set() method:

Example
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
The set() method can also be used to change existing map values:

Example
fruits.set("apples", 500);
Map.size
The size property returns the number of elements in a map:

Example
fruits.size;
Map.delete()
The delete() method removes a map element:

Example
fruits.delete("apples");
Map.clear()
The clear() method removes all the elements from a map:

Example
fruits.clear();
Map.has()
The has() method returns true if a key exists in a map:

Example
fruits.has("apples");
Try This:
fruits.delete("apples");
fruits.has("apples");
ADVERTISEMENT

Map.forEach()
The forEach() method invokes a callback for each key/value pair in a map:

Example
// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
Map.entries()
The entries() method returns an iterator object with the [key,values] in a map:

Example
// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
Map.keys()
The keys() method returns an iterator object with the keys in a map:

Example
// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}
Map.values()
The values() method returns an iterator object with the values in a map:

Example
// List all values
let text = "";
for (const x of fruits.values()) {
  text += x;
}
You can use the values() method to sum the values in a map:

Example
// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}
Objects as Keys
Being able to use objects as keys is an important Map feature.

Example
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
Remember: The key is an object (apples), not a string ("apples"):

Example
fruits.get("apples");  // Returns undefined
JavaScript Map.groupBy()
ES2024 added the Map.groupBy() method to JavaScript.

The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

The Map.groupBy() method does not change the original object.

Example
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruits, myCallback);

