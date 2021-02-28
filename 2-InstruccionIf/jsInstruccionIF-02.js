/*
Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	var edadIngresada;
	var mayorDeEdad;

	edadIngresada = 0;
	mayorDeEdad   = 0;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17)
	{
		alert("Es mayor de edad");
	}
	
}//FIN DE LA FUNCIÓN