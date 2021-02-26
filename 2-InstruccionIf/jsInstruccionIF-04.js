function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

//	if(edad > 12)
//		{
//			if(edad < 18)
//				{
//					alert("La persona es adolescente");
//				}
//		}
	

	if(edad > 12 && edad < 18)
		{
			alert("La persona es adolescente");
		}

	//txtIdEdad
	//Al ingresar una edad debemos informar si la persona es adolescente, 
	//edad entre 13 y 17 años (inclusive) .

}//FIN DE LA FUNCIÃ“N