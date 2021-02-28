function mostrar()
{
	//tomo la edad  
	var edad;
	edad = 0;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

//	if(edad > 17)
//		{
//			alert("Es mayor de edad");
//		}
	
//	if(edad < 18)
//		{
//			alert("Es menor de edad");
//		}
		
	if(edad > 17)
		{
			alert("Es mayor de edad");
		}
	
	else
		{
			alert("Es menor de edad");
		}

}//FIN DE LA FUNCIÓN