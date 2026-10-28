var newparagraph = document.createElement("p");
var content = document.createTextNode("This is a new paragraph created using JavaScript.");
newparagraph.appendChild(content);
var k=document.getElementById("myDiv");
k.appendChild(newparagraph);
function changeText(x) {
    x.parentNode.removeChild(x);
}
