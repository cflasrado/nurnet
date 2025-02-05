var x  = document.getElementById("box");
x.addEventListener("mouseover", Expand);
var i;

function Expand()
{
	  document.getElementById("demo").innerHTML += "Moused over!<br>";

for(i=0; i< 50; i++)
{
	document.getElementByClass("shadow").style.width = width++;
}
	
}