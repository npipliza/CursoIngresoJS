/*
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
/* function mostrar()
{
	var repeticiones;
	var contador;
	var numeroIngresado;

	contador = 0;
	repeticiones = 0;
	numeroIngresado = 0;

	numeroIngresado = prompt("ingrese el numero");
	numeroIngresado = parseInt(numeroIngresado);
	for(repeticiones > 0; repeticiones > contador; repeticiones ++)
	{
		console.log(repeticiones);
		if(numeroIngresado == 9)
		{
			break;
		}		
	}

}//FIN DE LA FUNCIÃ“N

 */function mostrar()
{
	var repeticiones;
	var contador;
	var numeroIngresado;

	repeticiones    = 0;
	contador        = 0;
	numeroIngresado = 0;

	numeroIngresado = prompt("ingrese el numero de repeticiones");
	numeroIngresado = parseInt(numeroIngresado);
	repeticiones    = numeroIngresado;
	for(contador > 0; contador < 9; repeticiones ++)
	{
		contador ++;
		if(repeticiones == 9)
		{
			break;
		}	
		console.log("repeticion" + (contador));	
	}		

}
