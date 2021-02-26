function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
		
//	if(edad < 13)
//		{
//			alert("Es menor de edad");
//		}
//	else if(edad > 12 && edad < 18)
//		{
//			alert("Es adolescente");
//		}
//	else if(edad > 17)
//		{
//			alert("Es mayor de edad");
//		}


	if(edad < 13)
	{
		alert("Es menor de edad");
	}else
	{
		if(edad > 17)
		{
			alert("Es mayor de edad");
		}
		else
		{
			alert("Es adolescente");
		}
	}


}
//FIN DE LA FUNCIÓN