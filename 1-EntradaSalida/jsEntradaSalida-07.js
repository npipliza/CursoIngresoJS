/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroDos = 0;
	numeroDos = 0;
	suma      = 0;

    numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;
	alert("La suma es: " + suma);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroDos = 0;
	numeroDos = 0;
	resta     = 0;

    numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	
	resta = numeroUno - numeroDos;
	alert("La resta es: " + resta);

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroDos   = 0;
	numeroDos   = 0;
	multiplicar = 0;

    numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	
	multiplicar = numeroUno * numeroDos;
	alert("La multiplicacion es: " + multiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;

	numeroDos = 0;
	numeroDos = 0;
	division  = 0;

    numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	
	division  = numeroUno / numeroDos;
	alert("La division es: " + division);

}

