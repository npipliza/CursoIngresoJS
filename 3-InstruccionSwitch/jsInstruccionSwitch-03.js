function mostrar()
{
	//tomo el mes
	var mesDelAnio;

	var mesDelAnio = document.getElementById('txtIdMes').value;

	switch(mesDelAnio)
	{
		case "Febrero":
			alert("Este mes no tiene m�s de 29 d�as.");
			break;

		default:
			alert("Este mes tiene 30 o m�s d�as.");
			break;
	}
	
	
}//FIN DE LA FUNCIÓN