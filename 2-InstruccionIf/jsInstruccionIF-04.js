function mostrar()
{
	//tomo la edad  
	var edad;
	edad = 0;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 18)
	{
		alert("Es adolescente");
	}
	else
	{
		alert("NO es adolescente");
	}

	//txtIdEdad
	//Al ingresar una edad debemos informar si la persona es adolescente, 
	//edad entre 13 y 17 años (inclusive) .

}//FIN DE LA FUNCIÃ“N