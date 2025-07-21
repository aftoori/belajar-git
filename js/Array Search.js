const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
Syntax
array.indexOf(item, start)
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

JavaScript Array lastIndexOf()
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

Example
Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
Syntax
array.lastIndexOf(item, start)
item	Required. The item to search for
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
JavaScript Array includes()
ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
Syntax
array.includes(search-item)
Array.includes() allows to check for NaN values. Unlike Array.indexOf().

Browser Support
includes() is an ECMAScript 2016 feature.

ES 2016 is fully supported in all modern browsers since March 2017:

Chrome 52	Edge 15	Firefox 52	Safari 10.1	Opera 39
Jul 2016	Apr 2017	Mar 2017	May 2017	Aug 2016
includes() is not supported in Internet Explorer.

ADVERTISEMENT

JavaScript Array find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
find() is an ES6 feature (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
find() is not supported in Internet Explorer.

JavaScript Array findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
findIndex() is an ES6 feature (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
findIndex() is not supported in Internet Explorer.

JavaScript Array findLast() Method
ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
Browser Support
findLast() is an ES2023 feature.

JavaScript 2023 is supported in all modern browsers since July 2023:

Chrome 110	Edge 110	Firefox 115	Safari 16.4	Opera 96
Feb 2023	Feb 2023	Jul 2023	Mar 2023	May 2023
JavaScript Array findLastIndex() Method
The findLastIndex() method finds the index of the last element that satisfies a condition.

Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
Browser Support
findLastIndex() is an ES2023 feature.

