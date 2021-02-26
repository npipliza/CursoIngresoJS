/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
/*function mostrar()
{
	//alert("iteracion while");
	var contador;

	contador = 0; // partida

	while(isNaN(contador) == true || contador < 10) // logica
	{
		contador ++;
		alert(contador);
	}
}//FIN DE LA FUNCIÓN
*/
/*	{
			alert("iteracion while");
		
			var cambiante;
		
			cambiante = "si"; // partida
		
			while(cambiante == "si") //logica
			{
			alert('ingreso');
			cambiante = "no"; // cambio de valor
			}
	*/		

/*1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)*/
/*
function mostrar()
{
	var numeroIngresado;
	var cuentaEntreDiezyVeinte;
	var contador;

	numeroIngresado        = 0;
	contador               = 0;
	cuentaEntreDiezyVeinte = 0;

	numeroIngresado = prompt("Ingrese un numero:");
	numeroIngresado = parseInt(numeroIngresado);	

	while(contador < 4)
	{
		contador ++;
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado > 9 || numeroIngresado < 21)
		{
			cuentaEntreDiezyVeinte ++;
		}
	}
	respuesta = alert("Para continuar ingrese SI");
	alert("La cantidad de numeros entre 10 y 20 son: " + cuentaEntreDiezyVeinte);

}//FIN DE LA FUNCIÓN
*/
/*2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.*/
function mostrar()
{
	var numeroIngresado;
	var cuentaEntreDiezyVeinte;
	var contador;
	var respuesta;

	numeroIngresado        = 0;
	contador               = 0;
	cuentaEntreDiezyVeinte = 0;
	respuesta              = "si";


	while(respuesta == "si")
	{
		contador ++;
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)== true)
		{		
			numeroIngresado = prompt("Ingrese un numero:");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado > 9 && numeroIngresado < 21)
			{
				cuentaEntreDiezyVeinte ++;
			}	
		respuesta = prompt("Para continuar ingrese SI");
	}
	alert("La cantidad de numeros entre 10 y 20 son: " + cuentaEntreDiezyVeinte);

}//FIN DE LA FUNCIÓN