/*
Enunciado:
al presionar el bot�n repetir el pedido de n�mero hasta que ingresemos el 9.
*/
function mostrar()
{
	var repeticiones;
	var contador;

	repeticiones = 0;

	repeticiones = prompt("ingrese el numero");
	repeticiones = parseInt(repeticiones);
	for(contador = 0; contador < repeticiones; contador ++)
	{
		console.log(contador);
		if(contador == 9)
		{
			break;
		}		
	}

}//FIN DE LA FUNCIÓN