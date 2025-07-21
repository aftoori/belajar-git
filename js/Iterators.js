// Create an iterator
const myIterator = Iterator.from([1, 2, 3]);

// Iterate over the elements
let text = "";
for (const x of myIterator) {
  text += x;
}

// Create an iterator
const myIterator = Iterator.from([32, 33, 16, 40]);

// Filter the iterator
const filteredIterator = myIterator.filter(x => x > 18);

// Create an iterator
const myIterator = Iterator.from("123456789");

// Now you can use the map method
const mappedIterator = myIterator.map(x => x * 2);

// Create an iterator
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// Map the Iterator
const mappedIterator = myIterator.flatMap(x => [x, x * 10]);
The take() Method
The take() method returns a new iterator that yields at most a specified number of elements.

Example
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// Take the first five elements
const firstFive = myIterator.take(5);
The drop() Method
The drop() method returns a new iterator that skips a specified number of elements before yielding the rest.

Example
// Create an iterator
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// Remove the first five
const firstFive = myIterator.drop(5);

The find() Method
The find(fn) method returns the first element that satisfies a test function.

Example
// Create an iterator
const myIterator = Iterator.from([3, 10, 18, 30, 20]);

// Find first greater than 18
let result = myIterator.find(x => x > 18);
The reduce() Method
The reduce() method applies a reducer function against an accumulator and each element to reduce it to a single value.

Example
// Create an Iterator
const myIterator = Iterator.from([175, 50, 25]);

// Reduce the Iterator
let result = myIterator.reduce(myFunc);
The every() Method
The every(fn) method returns true if all elements in the iterator satisfy the provided test function.

Example
// Create an Iterator
const myIterator = Iterator.from("123456789");

// Is every Element greater than 7?
let result = myIterator.every(x => x > 7);
The some() Method
The some() method returns true if at least one element in the iterator satisfies the provided test function.

Example
// Create an Iterator
const myIterator = Iterator.from("123456789");

// Is some Element greater than 7?
let result = myIterator.some(x => x > 7);
The forEach() Method
The forEach() method executes a provided function once for each element in the iterator.

Example
// Create an iterator
const myIterator = Iterator.from("123456789");

// Iterate over all elements
let text = "";
myIterator.forEach (x => text += x);
