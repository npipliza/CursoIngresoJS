/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/* function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables 
	banderaDelPrimero= 0; //"es el primero"
	respuesta='si';
	numeroMaximo = 0;
	numeroMinimo = 0;
	while(respuesta == "si")
	{
		numeroIngresado = prompt("ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("ERROR, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);	
		}
		if(banderaDelPrimero == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1; //la bandera se usa cuando no hay otra forma de darse cuenta
		}
		else
		{
			//con estos if se evalua max y min
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}

			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta=prompt("Ingrese si para continuar.");
	}

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo; 

}//FIN DE LA FUNCIÓN
 */
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var nombre;
	var nombreMaximo;
	var nombreMinimo;

	//iniciar variables 
	banderaDelPrimero= 0; //"es el primero"
	respuesta='si';
	numeroMaximo = 0;
	numeroMinimo = 0;
	while(respuesta == "si")
	{
		nombre          = prompt("Ingrese su nombre");
		numeroIngresado = prompt("Ingrese su edad");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("ERROR, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);	
		}
		if(banderaDelPrimero == 0)
		{
			nombreMaximo = nombre;
			nombreMinimo = nombre;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1; //la bandera se usa cuando no hay otra forma de darse cuenta
		}
		else
		{
			//con estos if se evalua max y min
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
				nombreMaximo = nombre;
			}

			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
				nombreMinimo = nombre;
			}
		}
		respuesta=prompt("Ingrese si para continuar.");
	}

	document.getElementById('txtIdMaximo').value = nombreMaximo;
	document.getElementById('txtIdMinimo').value = nombreMinimo; 

}//FIN DE LA FUNCIÓN


