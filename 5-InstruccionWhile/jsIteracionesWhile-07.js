/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
/*
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;

	contador   = 0;
	acumulador = 0;
	respuesta  = "si"; //partida

	while(respuesta == "si") // logica
	{
		contador        = contador + 1;
		numeroIngresado = prompt("Ingrese numero " + contador);
		numeroIngresado = parseInt(numeroIngresado);
		acumulador      = acumulador + numeroIngresado;
		respuesta       = prompt("Ingrese si para continuar");// cambia el valor
	}

	promedio = acumulador/contador;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador/contador; 

}//FIN DE LA FUNCIÓN
*/

function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;

	contador   = 0;
	acumulador = 0;
	respuesta  = "si";

	while(isNaN(acumulador) == false && respuesta == "si") 
	{
		contador        = contador + 1;
		numeroIngresado = prompt("Ingrese numero " + contador);
		numeroIngresado = parseInt(numeroIngresado);
		acumulador      = acumulador + numeroIngresado;
		respuesta       = prompt("Ingrese si para continuar");
	}

	promedio = acumulador/contador;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador/contador; 

}//FIN DE LA FUNCIÓN
