/*
For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. 
solo si los hay
*/
function mostrar()
{
	var contador;
	var contadorNegativos;
	var contadorPares;
	var numeroIngresado;
	var mayorNegativo;
	var menorPar;
	var numerosNegativos;
	var numerosPares;
	var banderaMayorNegativo;
	var banderaMenorPar;

	numerosNegativos     = 0;
	numerosPares         = 0;
	banderaMayorNegativo = 0;
	banderaMenorPar      = 0;
	contadorNegativos    = 0;
	contadorPares        = 0;

	for(contador = 0 ; contador < 5; contador ++)
	{					
		numeroIngresado = prompt("Ingrese numero #" + (contador + 1));
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("ERROR. Ingrese numero #" + (contador + 1));
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado < 0)
		{		
			if(banderaMayorNegativo == 1 && numeroIngresado < mayorNegativo)
			{
				mayorNegativo = mayorNegativo + numeroIngresado;
				mayorNegativo = numeroIngresado;
			}
			else
			{
				if(banderaMayorNegativo == 0)
				{
					mayorNegativo        = numeroIngresado;
					banderaMayorNegativo = 1;
				}
			}
		}

		if(numeroIngresado %2 == 0)
		{		
			if(banderaMenorPar == 1 && numeroIngresado < menorPar)
			{
				menorPar = menorPar + numeroIngresado;	
				menorPar = numeroIngresado;
			}
			else
			{
				if(banderaMenorPar == 0)
				{
					menorPar        = numeroIngresado;
					banderaMenorPar = 1;
				}
			}
		}
	}// fin del for

	console.log("El mayor de los numeros negativos es: " + mayorNegativo);
	console.log("El menor de los numeros pares es: " + menorPar);


}//FIN DE LA FUNCIÓN