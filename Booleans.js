let x = 5;

(x == 8); // equals false
(x != 8); // equals true
See Also:
JavaScript Comparisons Tutorials

Conditions
Booleans are extensively used in if statements to determine the code blocks to execute based on the logic.

Example	Result
if (day == "Monday")	true or false
if (salary > 9000)	true or false
if (age < 18)	true or false
Example
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
See Also:
JavaScript If Else Tutorial

Loops
Booleans are extensively used in loops to determine conditions for looping.

Description	Example
For loop	for (i = 0; i < 5; i++)
While loop	while (i < 10)
For in loop	for (x in person)
For of loop	for (x of cars)
Example
while (i < 10) {
  text += i;
  i++;
}
See Also:
JavaScript Loop Tutorial

The Boolean() Function
You can use the Boolean() function to find out if an expression (or a variable) is true:

Example
Boolean(10 > 9)
Or even easier:

Example
(10 > 9)

Everything With a "Value" is True
Examples
100 is true

3.14 is true

-15 is true

"Hello" is true

"false" is true

(7 + 1 + 3.14) is true
Everything Without a "Value" is False
The Boolean value of 0 (zero) is false:

let x = 0;
Boolean(x);
The Boolean value of -0 (minus zero) is false:

let x = -0;
Boolean(x);
The Boolean value of "" (empty string) is false:

let x = "";
Boolean(x);
The Boolean value of undefined is false:

let x;
Boolean(x);
The Boolean value of null is false:

let x = null;
Boolean(x);
The Boolean value of false is (you guessed it) false:

let x = false;
Boolean(x);
The Boolean value of NaN is false:

let x = 10 / "Hallo";
Boolean(x);
JavaScript Booleans as Objects
Normally JavaScript booleans are primitive values created from literals:

let x = false;
But booleans can also be defined as objects with the keyword new:

let y = new Boolean(false);
Example
let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object
Warning
Do not create Boolean objects.

The new keyword complicates the code and slows down execution speed.

Boolean objects can produce unexpected results:

Booleans and boolean objects cannot be safely compared:

let x = Boolean(false);
let y = new Boolean(false);

(x == Y) returns true
(y === Y) returns false
Comparing two JavaScript objects always returns false.

