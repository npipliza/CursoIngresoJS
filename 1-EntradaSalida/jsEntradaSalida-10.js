/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{

	var importe;
	var descuento;
	var resultado;
	var usuario;
	
	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	usuario = prompt("Ingrese el porcentaje:");
	usuario = parseInt(usuario);

	descuento = importe * usuario / 100;
	resultado = importe - descuento;
	
	document.getElementById('txtIdResultado').value = resultado;
}
*/

/*clase de los sabados
/*
2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto, 
tambien se debe pedir el porcentaje de descuento al usuario, mostar 
el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
*/
function mostrarAumento()
{
	var precioProducto;
	var nombreProducto;
	var porcentajeDescuento;
	var descuento;
	var precioFinal;

	precioProducto      = document.getElementById('txtIdImporte').value;
	precioProducto      = parseInt(precioProducto);
	nombreProducto      = prompt("Ingrese el nombre del producto:");
	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento:");
	porcentajeDescuento = parseInt(porcentajeDescuento);
	

	descuento   = precioProducto * porcentajeDescuento / 100;
	precioFinal = precioProducto - descuento;
	mensaje     = "usted compro un " + nombreProducto + " con " + descuento 
	mensaje    += " % de descuento, el precio final es: $" + precioFinal

	document.getElementById('txtIdResultado').value = mensaje;

}
