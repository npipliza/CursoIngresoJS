/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importe;
	var aumento;
	var resultado;
	var usuario;
	
	importe = document.getElementById('txtIdSueldo').value;
	importe = parseInt(importe);

	usuario = prompt("Ingrese el porcentaje:");
	usuario = parseInt(usuario);

	aumento = importe * usuario / 100;
	resultado = importe + aumento;
	
	document.getElementById('txtIdResultado').value = resultado;
}
