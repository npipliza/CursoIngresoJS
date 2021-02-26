/*
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador  =0;
	acumulador=0;
	
	while(contador < 5) //cantidad de iteraciones
{
	//puedo subir el contador para mostrarlo en el prompt
	contador = contador + 1;
	numeroIngresado = prompt("Ingrese numero " + contador);
	numeroIngresado = parseInt(numeroIngresado);
	//contador        = contador + 1;
	acumulador      = acumulador + numeroIngresado;
}
//contador finaliza la iteracion

	promedio = acumulador/contador;

	document.getElementById('txtIdSuma').value = acumulador;
	//document.getElementById('txtIdPromedio').value = acumulador/5; // literal
	document.getElementById('txtIdPromedio').value = acumulador/contador; // variable

}//FIN DE LA FUNCIÓN
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador   = 0;
	acumulador = 0;
	
	while(isNaN(acumulador) == false && contador < 5) 
	{
		contador        = contador + 1;
		numeroIngresado = prompt("Ingrese numero " + contador);
		numeroIngresado = parseInt(numeroIngresado);
		acumulador      = acumulador + numeroIngresado;
	}

	promedio = acumulador/contador;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador/contador; 

}//FIN DE LA FUNCIÓN
