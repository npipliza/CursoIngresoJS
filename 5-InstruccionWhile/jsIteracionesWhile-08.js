/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var acumuladorPositivo;
	var acumuladorNegativo;
	var respuesta;
	var numeroIngresado;

	acumuladorPositivo = 0;
	acumuladorNegativo = 1;
	respuesta          = "si"; //partida

	while(respuesta == "si") // logica
	{	
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado    = prompt("ERROR, ingrese un numero");
			numeroIngresado    = parseInt(numeroIngresado);
		}
		if(numeroIngresado > 0)
		{
			acumuladorPositivo = acumuladorPositivo + numeroIngresado;
			acumuladorPositivo = parseInt(acumuladorPositivo);
		}
		else
		{
		if(numeroIngresado < 0)
			{
				acumuladorNegativo = acumuladorNegativo * numeroIngresado;
				acumuladorNegativo = parseInt(acumuladorNegativo);
			}
			else
			{
				acumuladorNegativo = 0;
			}
		}

		respuesta = prompt("Ingrese si para continuar");// cambia el valor
	}

	document.getElementById('txtIdSuma').value = acumuladorPositivo;
	document.getElementById('txtIdProducto').value = acumuladorNegativo; 

}//FIN DE LA FUNCIÓN
