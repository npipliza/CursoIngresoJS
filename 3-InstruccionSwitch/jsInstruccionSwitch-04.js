function mostrar()
{
	//tomo el mes
	var mesDelAnio;

	var mesDelAnio = document.getElementById('txtIdMes').value;

	switch(mesDelAnio)
	{
		case "Febrero": //31
			alert("Este mes tiene 28 dias.");
			break;

		case "Abril": //30
		case "Junio": 
		case "Septiembre": 
		case "Noviembre": 
			alert("Este mes tiene 30 dias.");
			break;

		default:
			alert("Este mes tiene 31 dias.");
			break;
	}
	
}//FIN DE LA FUNCIÓN