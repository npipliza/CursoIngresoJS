/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama JosÃ© y tiene 66 aÃ±os" 	
*/
/* bis :

Debemos lograr tomar nombre y edad por ID , apellido por prompt ,
y mostrarlos concatenados 
ej.: "Usted se llama José peres y tiene 66 años" 	*/

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


 

