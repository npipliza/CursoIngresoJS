/*
function mostrar()
{
	var destino;
	var estacion;
	var precioBase;
	var precioFinal;
	var viaje;
	var porcentaje;


	destino      = document.getElementById('txtIdDestino').value;
	estacion     = document.getElementById('txtIdEstacion').value;
	precioBase   = 15000;
	precioBase   = parseInt(precioBase);
	porcentaje   = 0;
	porcentaje   = parseInt(porcentaje);

	switch(viaje)
	{
		//en Invierno: bariloche +20% cataratas y Cordoba -10% Mar del plata -20%
		case "Bariloche": 
		
			if(estacion == Otonio)
			{
				porcentaje = precioBase * 10 / 100;
				porcentaje = parseInt(porcentaje);
			}
			if(estacion == Primavera)
			{
				porcentaje = precioBase * 10 / 100;
				porcentaje = parseInt(porcentaje);
			}
			else
			{
				if(estacion == Invierno)
				{
					porcentaje = precioBase * 20 / 100;
					porcentaje = parseInt(porcentaje);
				}
			}
		break;

	}

	precioFinal  = precioBase + porcentaje;
	precioFinal  = parseInt(precioFinal);

	alert("El precio final de este destino es: $" + precioFinal + ".");

}//FIN DE LA FUNCIÃ“N
*/
/*
function mostrar()
{
	var destino;
	var estacion;
	var precioBase;
	var valorPorcentaje;
	var viaje;
	var porcentaje;

	destino      = document.getElementById('txtIdDestino').value;
	estacion     = document.getElementById('txtIdEstacion').value;
	precioBase   = 15000;
	porcentaje   = 0;

	if(destino == "Bariloche")//Invierno: +20% / Verano: -20% /  Otoño y Primavera: +10
	{		
		if(estacion == "Invierno")
		{
			porcentaje = 20;
		}
		else
		{
			if(estacion == "Verano")
			{
				porcentaje = -20;
			}
			else
			{
				porcentaje = 10;
			}
		}
	}

	if(destino == "Cataratas" || destino == "Cordoba")//Invierno: -10% / Verano: +10% / Otoño y Primavera:cataratas +10 y cordoba 0
	{		
		if(estacion == "Invierno")
		{
			porcentaje = -10;
		}
		else
		{
			if(estacion == "Verano")
			{
				porcentaje = 10;
			}
			else
			{
				if(estacion == "Otonio" || estacion == "Primavera")
				{
					if(destino == "Cataratas")
					{
						porcentaje = 10;
					}
					else
					{
						porcentaje = 0;
					}
				}
			}
		}
	}

	if(destino == "Mar del plata")//Invierno: -20% / Verano: +20% /  Otoño y Primavera: +10
	{		
		if(estacion == "Invierno")
		{
			porcentaje = -20;
		}
		else
		{
			if(estacion == "Verano")
			{
				porcentaje = 20;
			}
			else
			{
				porcentaje = 10;
			}
		}
	}

	valorPorcentaje = porcentaje / 100;
	valorPorcentaje = parseInt(valorPorcentaje);

	viaje = precioBase * valorPorcentaje;
	viaje = parseInt(viaje);

	alert("El precio final de este destino es: $ " + viaje + ".");

}//FIN DE LA FUNCIÃ“N
*/
function mostrar()
{
	var destino;
	var estacion;
	var precioBase;
	var valorPorcentaje;
	var viaje;
	var porcentaje;

	destino         = document.getElementById('txtIdDestino').value;
	estacion        = document.getElementById('txtIdEstacion').value;
	precioBase      = 15000;
	porcentaje      = 0;
	valorPorcentaje = 0;
	viaje           = 0;

	switch(destino)
	{
		case "Bariloche":
			if(estacion == "Invierno")
			{
				porcentaje = 20;
			}
			else
			{
				if(estacion == "Verano")
				{
					porcentaje = -20;
				}
				else
				{
					porcentaje = 10;	
				}
			}	
		break;

		case "Cataratas":
			if(estacion == "Invierno")
			{
				porcentaje = -10;
			}
			else
			{
				if(estacion == "Verano")
				{
					porcentaje = 10;
				}
				else
				{
					porcentaje = 10;	
				}
			}
		break;

		case "Cordoba":
			if(estacion == "Invierno")
			{
				porcentaje = -10;
			}
			else
			{
				if(estacion == "Verano")
				{
					porcentaje = 10;
				}
				else
				{
					porcentaje = 0;	
				}
			}
		break;

		case "Mar del plata":
			if(estacion == "Invierno")
			{
				porcentaje = -20;
			}
			else
			{
				if(estacion == "Verano")
				{
					porcentaje = 20;
				}
				else
				{
					porcentaje = 10;	
				}
			}
		break;
	}// fin del switch
	
	valorPorcentaje = precioBase * porcentaje / 100;
	valorPorcentaje = parseInt(valorPorcentaje);

	viaje = precioBase + valorPorcentaje;
	viaje = parseInt(viaje);

	alert("El precio final de este destino es: $ " + viaje + ".");

}//FIN DE LA FUNCIÃ“N

/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento*/


