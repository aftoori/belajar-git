xhttp.open("GET", "demo_get.asp");
xhttp.send();
In the example above, you may get a cached result. To avoid this, add a unique ID to the URL:

Example
xhttp.open("GET", "demo_get.asp?t=" + Math.random());
xhttp.send();
If you want to send information with the GET method, add the information to the URL:

Example
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
xhttp.send();
How the server uses the input and how the server responds to a request, is explained in a later chapter.


POST Requests
A simple POST request:

Example
xhttp.open("POST", "demo_post.asp");
xhttp.send();
To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:

Example
xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
Method	Description
setRequestHeader(header, value)	Adds HTTP headers to the request

header: specifies the header name
value: specifies the header value
Synchronous Request
To execute a synchronous request, change the third parameter in the open() method to false:

xhttp.open("GET", "ajax_info.txt", false);
Sometimes async = false are used for quick testing. You will also find synchronous requests in older JavaScript code.

Since the code will wait for server completion, there is no need for an onreadystatechange function:

Example
xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;
