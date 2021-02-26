/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f o m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt(" ERROR, ingrese f o m .");
	}
		document.getElementById('txtIdSexo').value = sexoIngresado;
	

}//FIN DE LA FUNCIÓN