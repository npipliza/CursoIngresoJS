/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var repeticiones;
	var contadorPares;
	var numeroIngresado;

	repeticiones    = 0;
	contadorPares   = 0;
	numeroIngresado = 0;

	numeroIngresado = prompt("ingrese el numero de repeticiones");
	numeroIngresado = parseInt(numeroIngresado);
	repeticiones    = numeroIngresado;
	for(contadorPares %2 == 0; repeticiones < numeroIngresado; repeticiones ++)
	{
		contadorPares ++;		

		if(repeticiones == numeroIngresado)
		{
			break;
		}		
		
		console.log("repeticion" + (contadorPares));	
	
	}		

}// fin de la funcion
