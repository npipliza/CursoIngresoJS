/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
*/
/* bis :

Debemos lograr tomar nombre y edad por ID , apellido por prompt ,
y mostrarlos concatenados 
ej.: "Usted se llama Jos� peres y tiene 66 a�os" 	*/

function mostrar(){

	var nombreIngresado;
	var edadIngresada;
	var apellidoIngresado;
	
	nombreIngresado   = '';
	edadIngresada     = 0;
	apellidoIngresado = '';

	nombreIngresado   = document.getElementById('txtIdNombre').value;
	edadIngresada     = document.getElementById('txtIdEdad').value;
	apellidoIngresado = prompt("Ingrese su apellido: ");

	alert("Usted se llama : " + nombreIngresado + " " + apellidoIngresado + " y tiene " + edadIngresada + " anios");
}


 

