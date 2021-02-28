function mostrar()
{
	//tomo el mes
	var mesDelAnio;

	var mesDelAnio = document.getElementById('txtIdMes').value;

	switch(mesDelAnio)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias.");
			break;

		default:
			alert("Este mes tiene 30 o mas dias.");
			break;
	}
	
	
}//FIN DE LA FUNCIÓN