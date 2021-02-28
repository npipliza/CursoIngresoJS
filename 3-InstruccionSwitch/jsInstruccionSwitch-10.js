function mostrar()
{

	var destino;
	var estacion;
	var viaje;

	destino  = document.getElementById('txtIdDestino').value;
	estacion = document.getElementById('txtIdEstacion').value;

	switch(estacion)
	{
		case "Invierno": 
			if(destino == "Bariloche")
			{
				alert("Se viaja.");
			}
			else
			{
				alert("No se viaja.");
			}
		break;

		case "Verano": 
			if(destino == "Mar del Plata" || destino == "Cataratas")
			{
				alert("Se viaja.");
			}
			else
			{
				alert("No se viaja.");
			}
		break;

		case "Otonio": 
			alert("Se viaja.");
		break;

		case "Primavera": 
		if(destino != "Bariloche")
		{
			alert("Se viaja.");
		}
		else
		{
			alert("No se viaja.");
		}
		break;

	}// fin del switch

}//FIN DE LA FUNCIÃ“N

/*Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
Curso de ingreso UTN FRA*/