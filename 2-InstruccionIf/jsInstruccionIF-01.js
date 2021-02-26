function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtEdad').value;
	edad = parseInt(edad);

	if(edad == 15)
	{

	}
	
	alert("Niña bonita");

	//testing

	if(edad)
	{
		alert(verdadero);
	}
	else
	{
		alert(falso);
	}

}//FIN DE LA FUNCIÃ“N

/*
1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y 
el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace

function mostrar()
{
	var horas;
	var kilometros;
	var velocidad;
	var resultado;

	horas      = "";
	velocidad  = "";
	kilometros = "";

	kilometros = prompt("ingrese distancia");
	kilometros = parseInt(kilometros);
	horas      = prompt("ingrese el horas que tardo");
	horas      = parseInt(horas);
	velocidad  = kilometros / horas;
	velocidad  = parseInt(velocidad);

	if(velocidad < 61) //60 km/hr = muy lento
	{ 
		resultado = "muy lento";
	}
	else
	{
		if(velocidad < 81) //hasta 80km/h= lento
		{ 
			resultado = "lento";
		}
		else
		{
			if(velocidad < 101) //hasta 100= buen ritmo
			{
				resultado = "buen ritmo";
			}
			else
			{
				if(velocidad < 121) //hasta 120= ahi de la ley
				{
					resultado = "ahi de la ley";
				}
				else
				{
					resultado = "eso no se hace";
				}
			}	
		}

	}
	alert(resultado);
	

} */
// fin de la funcion

/*2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e 
informar a la persona si es:
*/
/*
function mostrar()
{
	var nombre;
	var peso;
	var altura;
	var indice;
	var resultado;

	nombre  = "";
	peso    =  0;
	altura  =  0;
	indice  =  0;

	nombre  = prompt("ingrese su nombre");
	peso    = prompt("ingrese su peso");
	peso    = parseInt(peso);
	altura  = prompt("ingrese su altura");
	altura  = parseFloat(altura);
	indice  = peso / (altura * altura);
	indice  = parseFloat(indice);

	if(indice < 18.6) //Bajo peso < 18.5
	{ 
		resultado = "Bajo peso";
	}
	else
	{
		if(indice < 25) //Peso normal 18.5 a 24.9
		{ 
			resultado = "Peso normal";
		}
		else
		{
			if(indice < 30) //Preobesidad 25.0 a 29.9
			{
				resultado = "Preobesidad";
			}
			else
			{
				if(indice < 35) //Obesidad I 30.0 a 34.9
				{
					resultado = "Obesidad I";
				}
				else
				{
					if(indice < 40) //Obesidad II 35.0 a 39.9
					{
						resultado = "Obesidad II";
					}
					else
					{
						resultado = "Obesidad III"; //Obesidad III > 40
					}
				}
			}	
		}
	}

	alert(nombre + ", segun los datos ingresados, tu IMC es: " + resultado);

} // fin de la funcion

*/
