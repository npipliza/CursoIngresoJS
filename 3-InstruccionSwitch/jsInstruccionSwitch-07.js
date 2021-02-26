function mostrar()
{
	var destino;

	var destino = document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Bariloche": 
			alert("El destino se encuentra en el Sur del pais.");
			break;

		case "Cataratas": 
			alert("El destino se encuentra en el Norte del pais.");
			break;

		case "Mar del plata": 
			alert("El destino se encuentra en el Este del pais.");
				break;

		case "Ushuaia": 
			alert("El destino se encuentra en el Oeste del pais.");
				break;
	}

}//FIN DE LA FUNCIÓN
/*Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste*/