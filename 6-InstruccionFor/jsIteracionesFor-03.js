/*
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var repeticiones;
	var contador;
	var numeroIngresado;

	repeticiones    = 0;
	numeroIngresado = 0;

	numeroIngresado = prompt("ingrese el numero de repeticiones");
	numeroIngresado = parseInt(numeroIngresado);
	repeticiones    = numeroIngresado;
	for(contador = 0; contador < repeticiones; contador ++)
	{
		alert("Hola UTN FRA" + (contador + 1));
	}

}//FIN DE LA FUNCIÃ“N