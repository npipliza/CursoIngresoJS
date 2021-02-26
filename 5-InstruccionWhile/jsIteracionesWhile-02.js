/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;

	contador = 11; // partida

	while(isNaN(contador) == false && contador > 1 && contador < 12) // logica
	{
		contador --;
		alert(contador);
	}

}//FIN DE LA FUNCIÓN

/*	alert("iteracion while");
	var contador;

	contador = 10; // partida

	while(contador < 11) // logica
	{
		contador --;
	}
	console.log(contador);
*/
