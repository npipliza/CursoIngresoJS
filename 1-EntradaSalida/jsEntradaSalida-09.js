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
	var porcentaje;

	importe    = 0;
	aumento    = 0;
	resultado  = 0;
	porcentaje = 0;
	
	importe = document.getElementById('txtIdSueldo').value;
	importe = parseInt(importe);

	porcentaje = prompt("Ingrese el porcentaje:");
	porcentaje = parseInt(porcentaje);

	aumento   = importe * porcentaje / 100;
	resultado = importe + aumento;
	
	document.getElementById('txtIdResultado').value = resultado;
}
