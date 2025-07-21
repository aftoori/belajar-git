const myCollection = document.getElementsByTagName("p");
The elements in the collection can be accessed by an index number.

To access the second <p> element you can write:

myCollection[1]
Note: The index starts at 0.

HTML HTMLCollection Length
The length property defines the number of elements in an HTMLCollection:

Example
myCollection.length
The length property is useful when you want to loop through the elements in a collection:

Example
Change the text color of all <p> elements:

const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}
