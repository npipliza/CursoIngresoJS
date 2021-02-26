/*
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
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

}//FIN DE LA FUNCIÃ“N