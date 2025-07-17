// Create a Set
const letters = new Set(["a","b","c"]);
Create a Set and add values:

Example
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
Create a Set and add variables:

Example
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
The add() Method
Example
letters.add("d");
letters.add("e");
If you add equal elements, only the first will be saved:

Example
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
ADVERTISEMENT


// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
Sets are Objects
typeof returns object:

typeof letters;      // Returns object
instanceof Set returns true:

letters instanceof Set;  // Returns true
Complete Set Reference
For a complete reference, go to our:


