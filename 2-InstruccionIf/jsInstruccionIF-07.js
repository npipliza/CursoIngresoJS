function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivilIngresado;
	
	edad = document.getElementById('txtIdEdad').value;
	estadoCivilIngresado = document.getElementById('estadoCivil').value;

//	if(edad < 18)
//	{
//		if(estadoCivilIngresado != "Soltero")
//		{
//			alert("Es muy pequeño para NO ser soltero");
//		}
//	}

	if(edad < 18 && estadoCivilIngresado != "Soltero")
	{
			alert("Es muy pequeño para NO ser soltero");
	}
	
	console.log(estadoCivilIngresado);

}//FIN DE LA FUNCIÃ“N