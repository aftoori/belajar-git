<!DOCTYPE html>
<html>
<body>

<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

</body>
</html>
In this example, a function is called from the event handler:

Example
<!DOCTYPE html>
<html>
<body>

<h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>

</body>
</html>
ADVERTISEMENT

HTML Event Attributes
To assign events to HTML elements you can use event attributes.

Example
Assign an onclick event to a button element:

<button onclick="displayDate()">Try it</button>
In the example above, a function named displayDate will be executed when the button is clicked.

Assign Events Using the HTML DOM
The HTML DOM allows you to assign events to HTML elements using JavaScript:

Example
Assign an onclick event to a button element:

<script>
document.getElementById("myBtn").onclick = displayDate;
</script>
In the example above, a function named displayDate is assigned to an HTML element with the id="myBtn".

The function will be executed when the button is clicked.

The onload and onunload Events
The onload and onunload events are triggered when the user enters or leaves the page.

The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

The onload and onunload events can be used to deal with cookies.

Example
<body onload="checkCookies()">
The oninput Event
The oninput event is often to some action while the user input data.

Below is an example of how to use the oninput to change the content of an input field.

Example
<input type="text" id="fname" oninput="upperCase()">
The onchange Event
The onchange event is often used in combination with validation of input fields.

Below is an example of how to use the onchange. The upperCase() function will be called when a user changes the content of an input field.

Example
<input type="text" id="fname" onchange="upperCase()">
