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

		case "12": 
		case "13": 
		case "14": 
		case "15": 
		case "16": 
		case "17": 
		case "18": 
		case "19": 
			alert("Es de tarde.");
			break;

		case "0": 
		case "1": 
		case "2": 
		case "3": 
		case "4": 
		case "5": 
		case "6": 
		case "20": 
		case "21": 
		case "22": 
		case "23": 
		case "24": 
			alert("Es de noche.");
			break;
	
		default:
			alert("La hora no existe.");
			break;
	}
	
}//FIN DE LA FUNCIÓN
/*
Al ingresar una hora, informar:
si est� entre las 7 y las 11 : "Es de ma�ana.".
si est� entre las 12 y las 19 : "Es de tarde.".
si est� entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO est� entre las 0 y las 24 : "la hora no existe.".*/