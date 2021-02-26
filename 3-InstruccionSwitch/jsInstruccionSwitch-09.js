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
//	precioBase   = parseInt(precioBase);
	porcentaje   = 0;
//	porcentaje   = parseInt(porcentaje);

	if(destino == "Bariloche")//Invierno: +20% / Verano: -20% /  Otoño y Primavera: +10
	{		
		if(estacion == "Invierno")
		{
			porcentaje = 20;
//			porcentaje = precioBase * 20 / 100;
//			porcentaje = parseInt(porcentaje);
		}
		else
		{
			if(estacion == "Verano")
			{
				porcentaje = -20;
//				porcentaje = precioBase * -20 / 100;
//				porcentaje = parseInt(porcentaje);
			}
			else
			{
				porcentaje = 10;
//				porcentaje = precioBase * 10 / 100;
//				porcentaje = parseInt(porcentaje);
			}
		}
	}

	if(destino == "Cataratas" || destino == "Cordoba")//Invierno: -10% / Verano: +10% / Otoño y Primavera:cataratas +10 y cordoba 0
	{		
		if(estacion == "Invierno")
		{
			porcentaje = -10;
//			porcentaje = precioBase * -10 / 100;
//			porcentaje = parseInt(porcentaje);
		}
		else
		{
			if(estacion == "Verano")
			{
				porcentaje = 10;
//				porcentaje = precioBase * 10 / 100;
//				porcentaje = parseInt(porcentaje);
			}
			else
			{
				if(estacion == "Otonio" || estacion == "Primavera")
				{
					if(destino == "Cataratas")
					{
						porcentaje = 10;
//						porcentaje = precioBase * 10 / 100;
//						porcentaje = parseInt(porcentaje);
					}
					else
					{
						porcentaje = 0;
//						porcentaje = precioBase * 0 / 100;
//						porcentaje = parseInt(porcentaje);
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
//			porcentaje = precioBase * -20 / 100;
//			porcentaje = parseInt(porcentaje);
		}
		else
		{
			if(estacion == "Verano")
			{
				porcentaje = 20;
//				porcentaje = precioBase * 20 / 100;
//				porcentaje = parseInt(porcentaje);
			}
			else
			{
				porcentaje = 10;
//				porcentaje = precioBase * 10 / 100;
//				porcentaje = parseInt(porcentaje);
			}
		}
	}

	valorPorcentaje = porcentaje / 100;
	valorPorcentaje = parseInt(valorPorcentaje);

	viaje = precioBase * valorPorcentaje;
	viaje = parseInt(viaje);

	alert("El precio final de este destino es: $ " + viaje + ".");

}//FIN DE LA FUNCIÃ“N

