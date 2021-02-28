/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroDos = 0;
	numeroDos = 0;
	resultado = 0;

    numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);

    resultado = numeroUno + numeroDos;

	alert("El resultado es: " + resultado);

}

