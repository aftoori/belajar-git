// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
The set() Method
You can add elements to a Map with the set() method:

Example
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
The set() method can also be used to change existing Map values:

Example
fruits.set("apples", 200);
The get() Method
The get() method gets the value of a key in a Map:

Example
fruits.get("apples");    // Returns 500
ADVERTISEMENT

Maps are Objects
typeof returns object:

Example
// Returns object:
typeof fruits;
instanceof Map returns true:

Example
// Returns true:
fruits instanceof Map;
JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:
Object	Map
Not directly iterable	Directly iterable
Do not have a size property	Have a size property
Keys must be Strings (or Symbols)	Keys can be any datatype
Keys are not well ordered	Keys are ordered by insertion
Have default keys	Do not have default keys

