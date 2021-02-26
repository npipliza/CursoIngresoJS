/*
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	var repeticiones;
	var contador;
	var numeroIngresado;

	repeticiones    = 0;
	contador        = 0;
	numeroIngresado = 0;

	numeroIngresado = prompt("ingrese el numero de repeticiones");
	numeroIngresado = parseInt(numeroIngresado);
	repeticiones    = numeroIngresado;
	for(contador > 0; contador < 10; repeticiones ++)
	{
		contador ++;
		alert("Hola UTN FRA" + (contador));
		console.log("Hola UTN FRA" + (contador));
		if(numeroIngresado == 10)
		{
			break;
		}		
	}

}//FIN DE LA FUNCIÃ“N