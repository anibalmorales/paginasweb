var a = document.getElementsByTagName("p");
var b = document.getElementById("titulo");


function agregartextos()
{
	var divprincipal = document.getElementById("principal");
	var totalparrafos = divprincipal.getElementsByTagName("p");

	var parrafo = document.createElement("p");
	var contenido= document.createTextNode("Saludos estos es un texto " + totalparrafos.length);

	parrafo.appendChild(contenido);
	divprincipal.appendChild(parrafo);

}
 
function generartitulo(cajadetexto)
{
	var etiqueta = document.getElementById("tit");
	etiqueta.innerHTML = cajadetexto.value;
	cajadetexto.style.background="blue";
	cajadetexto.style.textcolor ="white";

}