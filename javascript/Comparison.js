Operator	Description	Comparing	Returns	Try it
==	equal to	x == 8	false	
x == 5	true	
x == "5"	true	
===	equal value and equal type	x === 5	true	
x === "5"	false	
!=	not equal	x != 8	true	
!==	not equal value or not equal type	x !== 5	false	
x !== "5"	true	
x !== 8	true	
>	greater than	x > 8	false	
<	less than	x < 8	true	
>=	greater than or equal to	x >= 8	false	
<=	less than or equal to	x <= 8	true	
ADVERTISEMENT

How Can it be Used
Comparison operators can be used in conditional statements to compare values and take action depending on the result:

if (age < 18) text = "Too young to buy alcohol";
You will learn more about the use of conditional statements in the next chapter of this tutorial.

Logical Operators
Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	Description	Example	Try it
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true	
Conditional (Ternary) Operator
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax
variablename = (condition) ? value1:value2 
Example
let voteable = (age < 18) ? "Too young":"Old enough";
If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".

Comparing Different Types
Comparing data of different types may give unexpected results.

When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.

Case	Value	Try
2 < 12	true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false	
When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

To secure a proper result, variables should be converted to the proper type before comparison:

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
The Nullish Coalescing Operator (??)
The ?? operator returns the first argument if it is not nullish (null or undefined).

Otherwise it returns the second argument.

Example
let name = null;
let text = "missing";
let result = name ?? text;
The nullish operator is supported in all browsers since March 2020:

Chrome 80	Edge 80	Firefox 72	Safari 13.1	Opera 67
Feb 2020	Feb 2020	Jan 2020	Mar 2020	Mar 2020
The Optional Chaining Operator (?.)
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

Example
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;
