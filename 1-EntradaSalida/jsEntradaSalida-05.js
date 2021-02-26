/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama JosÃ© y tiene 66 aÃ±os" 	*/

function mostrar(){

	var nombreIngresado;
	var edad;
	var apellido;
	
	nombreIngresado = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	apellido = prompt("Ingrese su apellido: ");

	alert("Usted se llama : " + nombreIngresado + " " + apellido + " y tiene " + edad + " años");
}



/* bis :

Debemos lograr tomar nombre y edad por ID , apellido por prompt ,
y mostrarlos concatenados 
ej.: "Usted se llama José peres y tiene 66 años" 	*/

 

