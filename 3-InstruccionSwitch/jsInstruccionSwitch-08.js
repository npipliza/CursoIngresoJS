function mostrar()
{
	var destino;

	destino = document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Bariloche": 
		case "Ushuaia": 
			alert("En este destino hace FRIO.");
			break;

		case "Cataratas": 
		case "Mar del plata": 
			alert("En este destino hace CALOR.");
			break;

	}


}//FIN DE LA FUNCIÓN