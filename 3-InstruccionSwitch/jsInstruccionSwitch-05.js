function mostrar()
{
	var hora;

	var hora = document.getElementById('txtIdHora').value;

	switch(hora)
	{
		case "7": 
		case "8": 
		case "9": 
		case "10": 
		case "11": 
			alert("Es de ma�ana.");
			break;
		default:
			break;

	}
	
}//FIN DE LA FUNCIÓN
//Al ingresar una hora, informar:
//si est� entre las 7 y las 11 : "Es de ma�ana.".