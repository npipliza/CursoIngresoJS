/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/


function mostrar()
{
	var nombreIngresado;
	var apellido;
	
	nombreIngresado = "Maria";
	apellido = "Lopez";

	nombreIngresado = prompt("Ingrese su nombre: ", "nadie");
	apellido = prompt("Ingrese su apellido: ", "nadie");

	document.getElementById('txtIdNombre').value = nombreIngresado + " " + apellido;

	// el prompt se usa luego del = siempre. toma datos
	alert("Su nombre es: " + nombreIngresado + " " + apellido);
	console.log("Su nombre es: " + nombreIngresado + " " + apellido)
	//alert(nombre);
}



