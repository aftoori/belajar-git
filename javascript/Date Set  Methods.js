const d = new Date("January 01, 2025");
d.setFullYear(2020);
The setFullYear() method can optionally set month and day:

Example
const d = new Date("January 01, 2025");
d.setFullYear(2020, 11, 3);
ADVERTISEMENT

The setMonth() Method
The setMonth() method sets the month of a date object (0-11):

Example
const d = new Date("January 01, 2025");
d.setMonth(11);
The setDate() Method
The setDate() method sets the day of a date object (1-31):

Example
const d = new Date("January 01, 2025");
d.setDate(15);
The setDate() method can also be used to add days to a date:

Example
const d = new Date("January 01, 2025");
d.setDate(d.getDate() + 50);
Note
If adding days shifts the month or year, the changes are handled automatically by the Date object.

The setHours() Method
The setHours() method sets the hours of a date object (0-23):

Example
const d = new Date("January 01, 2025");
d.setHours(22);
The setHours() method can also be used to set minutes and seconds.

Example
const d = new Date("January 01, 2025");
d.setHours(22, 10, 20);
The setMinutes() Method
The setMinutes() method sets the minutes of a date object (0-59):

Example
const d = new Date("January 01, 2025");
d.setMinutes(30);
The setSeconds() Method
The setSeconds() method sets the seconds of a date object (0-59):

Example
const d = new Date("January 01, 2025");
d.setSeconds(30);
Compare Dates
Dates can easily be compared.

The following example compares today's date with January 14, 2100:

Example
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
