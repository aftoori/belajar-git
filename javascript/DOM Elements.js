const element = document.getElementById("intro");

const element = document.getElementsByTagName("p");

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

const x = document.getElementsByClassName("intro");

const x = document.querySelectorAll("p.intro");

const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
