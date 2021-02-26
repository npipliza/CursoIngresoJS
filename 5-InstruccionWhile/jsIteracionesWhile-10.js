/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.**
2-Suma de los positivos.**
3-Cantidad de positivos.**
4-Cantidad de negativos.**
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.**
8-Promedios de negativos.**
9-Diferencia entre positivos y negativos, (positvos-negativos).**
 */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var contadorNegativos;
	var contadorPositivos;
	var sumaNegativos;
	var sumaPositivos;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;
	var ceros;
	var pares;

	respuesta         = "si";
	numeroIngresado   = 0;
	sumaNegativos     = 0;
	promedioNegativos = 0;
	sumaPositivos     = 0;
	promedioPositivos = 0;
	diferencia        = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	ceros             = 0;
	pares             = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("ERROR, ingrese numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado < 0)
		{
			contadorNegativos ++;
			sumaNegativos     = numeroIngresado + sumaNegativos;
			promedioNegativos = sumaNegativos / contadorNegativos;
		} 
		else
		{
			if(numeroIngresado > 0)
			{
				contadorPositivos ++;
				sumaPositivos     = numeroIngresado + sumaPositivos;
				promedioPositivos = sumaPositivos / contadorPositivos;
			} 
			else
			{
				ceros ++;
			}
		}
		if(numeroIngresado %2 == 0)
		{
			pares ++;
		}
		respuesta = prompt("Ingrese si para continuar cargando numeros");

	}//fin del while

	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es: " + sumaNegativos + " , la cantidad de numeros negativos es: " + contadorNegativos + " y el promedio: " + promedioNegativos + "</br>");
	document.write("La suma de positivos es: " + sumaPositivos + " , la cantidad de numeros positivos es: " + contadorPositivos + " y el promedio: " + promedioPositivos + "</br>");
	document.write("Diferencia entre positivos y negativos: " + diferencia + "</br>");
	document.write("Cantidad de numeros ceros: " + ceros + "</br>");
	document.write("Cantidad de numeros pares: " + pares + ".");

}//FIN DE LA FUNCION