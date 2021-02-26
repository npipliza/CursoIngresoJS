function mostrar()
{
	//tomo el mes
	var mesDelAnio;

	var mesDelAnio = document.getElementById('txtIdMes').value;

	switch(mesDelAnio)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;

		default:
			alert("Este mes tiene 30 o más días.");
			break;
	}
	
	
}//FIN DE LA FUNCIÃ“N