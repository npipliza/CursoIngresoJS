/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resto;
	var dividendo;
	var divisor;

	dividendo = 0;
	divisor   = 0;
	resto     = 0;

	dividendo = document.getElementById('txtIdNumeroDividendo').value;
	divisor   = document.getElementById('txtIdNumeroDivisor').value;

	resto = dividendo % divisor;
	resto = parseInt(resto);
	console.log("El resto es: " + resto);
/* 	resto = dividendo % divisor;
	console.log("El resto es: " + resto);
	resto = dividendo % divisor;
	console.log("El resto es: " + resto);
	resto = dividendo % divisor;
	console.log("El resto es: " + resto);
	resto = dividendo % divisor;
	console.log("El resto es: " + resto);
	resto = dividendo % divisor;
	console.log("El resto es: " + resto);
	resto = dividendo % divisor;
	console.log("El resto es: " + resto);
 */	
}
// el resto sirve parqa saber si son numeros primos. 
//si la division es correcta, resto muestra la cantidad de numeros enteros que quedan fuera