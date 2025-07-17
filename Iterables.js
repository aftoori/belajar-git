const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}

const letters = ["a","b","c"];

for (const x of letters) {
  // code block to be executed
}

const numbers = [2,4,6,8];

for (const x of numbers) {
  // code block to be executed
}

const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}
its = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}

// Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Run the Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
Now you can use for..of

for (const num of myNumbers) {
  // Any Code Here
}

let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
}
