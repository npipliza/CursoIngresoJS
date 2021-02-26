/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botÃ³n  'mostrar'*/
/*
function mostrar()
{
	var nombreIngresado;
	nombreIngresado = txtIdNombre.value;
	// document.getElementById('txtIdNombre').value;
	nombreIngresado = document.getElementById('txtIdNombre').value;	

	alert(nombreIngresado);


	nombreIngresado=txtIdNombre.value;
	console.log("nombreIngresado");
	console.log(nombreIngresado);
	alert("ok");

*/


/*clase de los sabados
/*
1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio 
aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.*/

function mostrar()
{
	var descripcion;
	var precio;
	var aumento;
	var resultado;
	var porcentaje;

	porcentaje = 30;
	
	descripcion = prompt("Ingrese descripcion: ");

	precio = document.getElementById('txtIdNombre').value;
	precio = parseInt(precio);
	
	aumento   = precio * porcentaje / 100;
	resultado = precio + aumento;
	
	alert("usted compro " + descripcion + " y el precio con aumento es: $" + resultado);

}


