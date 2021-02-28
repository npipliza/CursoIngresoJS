//random
function mostrar()
{
	var contador;
	var numeroRandom;
	var contadorDe1;
	var contadorDe2;
	var contadorDe3;
	var contadorDe4;
	var contadorDe5;
	var contadorDe6;
	var contadorDe7;
	var contadorDe8;
	var contadorDe9;
	var contadorDe10;

	contador     = 0;
	numeroRandom = 0;
	contadorDe1  = 0;
	contadorDe2  = 0;
	contadorDe3  = 0;
	contadorDe4  = 0;
	contadorDe5  = 0;
	contadorDe6  = 0;
	contadorDe7  = 0;
	contadorDe8  = 0;
	contadorDe9  = 0;
	contadorDe10 = 0;

	      //ejecuta     //compara     //ejecuta
	for(contador = 0; contador < 100; contador ++)
	{
		numeroRandom = Math.floor(Math.random() * 10) + 1;
		//console.log(numeroRandom);
		switch(numeroRandom)
		{
			case 1:
				contadorDe1 ++;
		}
		console.log(numeroRandom);

	}
}// fin de la funcion
 // break rompe el for
 // continue lo sigue ejecutando
/*Enunciado:
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/
/*
function mostrar()
{
	var contador;
	contador = 0;
	      //ejecuta     //compara    //ejecuta
	for(contador > 0; contador < 11; contador ++)
	{
		//contador ++;
		console.log(contador);
	}
}// fin de la funcion
*/
// otro ejemplo que esta correcto escrito pero no se usa

/*	var contador;
	contador = 0;

	for(;;)
	{
		contador ++;
		console.log(contador + 1);
		//if(contador %3 == 0)
		if(contador == 10)
		{
			break;
		}
	}
}
*/
/* ejemplos de octavio
function mostrar()
{
	var contador;
	var respuesta;
	//contador=0;


	for(contador=0;contador<10;contador++)
	{
		console.log(contador);
	}
	/*while(contador<10)
	{
		contador++;
		console.log(contador);
	}*/
	/*
	contador=0;
	for(;contador<10;)
	{
		contador++;
		console.log(contador+1);
	}
*/
/*
contador=0;
for(;;)
{
	contador++
	console.log(contador+1);
	if(contador==10)
	{
		break;
	}
}
*/

/*
for(respuesta="si";respuesta=="si";respuesta=prompt("continuar"))
{
	console.log("adentro");
}
*/

