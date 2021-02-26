/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un numero entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while(isNaN(numeroIngresado) == true || numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado ++;
		numeroIngresado = prompt("error, ingrese un numero entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	console.log(numeroIngresado);
	document.getElementById('txtIdNumero').value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN

/*
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un numero entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);
	while(numeroIngresado < 0 || numeroIngresado > 9) // logica
	{
		numeroIngresado ++;
		numeroIngresado = prompt("error, ingrese un numero entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
	}
console.log(numeroIngresado);

document.getElementById('txtIdNumero').value = numeroIngresado;

	
}//FIN DE LA FUNCIÓN
*/
