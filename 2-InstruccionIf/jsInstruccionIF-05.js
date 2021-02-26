
function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);	

//	if(!(edad > 12 && edad < 18))
//		{
//			alert("La persona NO es adolescente");
//		}

		if(edad < 13 || edad > 17)
		{
			alert("La persona NO es adolescente");
		}

}//FIN DE LA FUNCIÓN



