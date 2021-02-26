/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el numero clave.");

	while(claveIngresada != "utn750") // logica
	{
		alert("contrase�a incorrecta");
		claveIngresada = prompt("ingrese el numero clave.");
	}

alert("Bienvenido");
}//FIN DE LA FUNCIÓN
