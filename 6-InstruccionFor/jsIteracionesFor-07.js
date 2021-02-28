/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/
/* ---------------------------------------------------------------------------------------------------- */
function mostrar()
{
 var contador;
 var paisIngresado;
 var continenteIngresado;
 var habitantesIngresado;
 var nivelPobrezaIngresado;
 var temperaturaIngresada;
 var banderaDelPrimero;
 var temperaturasPares;
 var temperaturasImparesEnEuropa;
 var paisConMenosHabitantes;
 var nombrePaisConMenosHabitantes;
 var contadorPaisesConMas40Grados;
 var promedioPaisesConMas40Grados;
 var cantidadPaisesConMenos0Grados;
 var totalHabitantes;
 var promedioHabitantes;
 var nombrePaisConMenorTemperatura;
 var cantidadPaisesConMenosTemperatura;
 var totalHabitantesAmerica;
 var totalHabitantesAsia;
 var totalHabitantesEuropa;
 var totalHabitantesAfrica;
 var totalHabitantesOceania;
 var continenteConMasHAbitantes;

 paisIngresado                     = '';
 continenteIngresado               = 0;
 habitantesIngresado               = 0;
 nivelPobrezaIngresado             = 0;
 temperaturaIngresada              = 0;
 banderaDelPrimero                 = 0;
 temperaturasPares                 = 0;
 temperaturasImparesEnEuropa       = 0;
 totalHabitantes                   = 0;
 promedioHabitantes                = 0;
 contadorPaisesConMas40Grados      = 0;
 promedioPaisesConMas40Grados      = 0;
 cantidadPaisesConMas40Grados      = 0;
 cantidadPaisesConMenos0Grados     = 0;
 nombrePaisConMenorTemperatura     = '';
 cantidadPaisesConMenosTemperatura = 0;
 totalHabitantesAmerica            = 0;
 totalHabitantesAsia               = 0;
 totalHabitantesEuropa             = 0;
 totalHabitantesAfrica             = 0;
 totalHabitantesOceania            = 0;

	for(contador = 0 ; contador < 5; contador ++)
	{  
		// el continente (validar entre america , asia , europa ,africa y oceania) 
		continenteIngresado   = prompt("Ingrese 1 America, 2 Asia, 3 Europa, 4 Africa o 5 Oceania.");
		continenteIngresado   = parseInt(continenteIngresado);
		while(isNaN(continenteIngresado) == true || continenteIngresado != 1 && continenteIngresado != 2 && continenteIngresado != 3 && continenteIngresado != 4 && continenteIngresado != 5)
		{
			continenteIngresado = prompt("ERROR. Ingrese 1 America, 2 Asia, 3 Europa, 4 Africa o 5 Oceania.");
			continenteIngresado = parseInt(continenteIngresado);
		}

		switch(continenteIngresado)
			{
				case 1:
					continenteIngresado = 'America';
					totalHabitantesAmerica ++;
				break;

				case 2:
					continenteIngresado = 'Asia';
					totalHabitantesAsia ++;
				break;

				case 3:
					continenteIngresado = 'Europa';
					totalHabitantesEuropa ++;
				break;

				case 4:
					continenteIngresado = 'Africa';
					totalHabitantesAfrica ++;
				break;

				case 5:
					continenteIngresado = 'Oceania';
					totalHabitantesOceania ++;
				break;
			}
		
		// pais ingresado
		paisIngresado = prompt("Ingrese el pais");
		while(isNaN(paisIngresado) == false)
		{
			paisIngresado = prompt("ERROR. Ingrese el pais");
		}

		// cantidad de habitantes en millones entre 1 y 7000 (validar)
		habitantesIngresado = prompt("Ingrese cantidad de habitantes en millones entre 1 y 7000");
		habitantesIngresado = parseInt(habitantesIngresado);
		while(isNaN(habitantesIngresado) == true || habitantesIngresado < 1 || habitantesIngresado > 7000)
		{
			habitantesIngresado = prompt("ERROR. Ingrese cantidad de habitantes en millones entre 1 y 7000");
			habitantesIngresado = parseInt(habitantesIngresado);
		}
		totalHabitantes = totalHabitantes + habitantesIngresado;	

	 	// el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)  
		nivelPobrezaIngresado = prompt("Ingrese 1 pobre, 2 rico, 3 muy rico.");
		nivelPobrezaIngresado = parseInt(nivelPobrezaIngresado);
		if(continenteIngresado == 'Europa' && nivelPobrezaIngresado == 1)
		{
			while(isNaN(nivelPobrezaIngresado) == true || nivelPobrezaIngresado == 1 && nivelPobrezaIngresado != 2 && nivelPobrezaIngresado != 3)
			{
				nivelPobrezaIngresado = prompt("ERROR.En Europa no hay paises pobres. Ingrese 2 rico, 3 muy rico.");
				nivelPobrezaIngresado = parseInt(nivelPobrezaIngresado);
			}
		}
		else
		{
			while(isNaN(nivelPobrezaIngresado) == true || nivelPobrezaIngresado != 1 && nivelPobrezaIngresado != 2 && nivelPobrezaIngresado != 3)
			{
				nivelPobrezaIngresado = prompt("ERROR. Ingrese 1 pobre, 2 rico, 3 muy rico.");
				nivelPobrezaIngresado = parseInt(nivelPobrezaIngresado);
			}
		}

		// la temperatura mínima que se registra en su territorio(entre -50 y 50)
		temperaturaIngresada = prompt("Ingrese temperatura minima que se registra en su territorio(entre -50 y 50");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) == true || temperaturaIngresada < -50 || temperaturaIngresada > 50)
		{
			temperaturaIngresada = prompt("ERROR. Ingrese temperatura minima que se registra en su territorio(entre -50 y 50");
			temperaturaIngresada = parseInt(temperaturaIngresada);	
		}

		//a)La cantidad de temperaturas pares.
		if(temperaturaIngresada %2 == 0)
		{
			temperaturasPares ++;
		}

		//b)la cantidad de temperaturas impares de europa.
		if(continenteIngresado == 'Europa' && temperaturaIngresada %2 != 0)
		{
			temperaturasImparesEnEuropa ++;
		}

		//c)El nombre del pais con menos habitantes 
		if(banderaDelPrimero == 1 && habitantesIngresado < paisConMenosHabitantes)
		{
			paisConMenosHabitantes       = habitantesIngresado;
			nombrePaisConMenosHabitantes = paisIngresado;
		}
		else
		{
			if(banderaDelPrimero == 0)
			{
				paisConMenosHabitantes       = habitantesIngresado;
				nombrePaisConMenosHabitantes = paisIngresado;
				banderaDelPrimero            = 1;
			}
		}

		//d)la cantidad de paises que superan los 40 grados.
		//g)el promedio de habitantes entre los paises que superan los 40 grados 
		if(temperaturaIngresada > 39)
		{
			cantidadPaisesConMas40Grados ++;
			contadorPaisesConMas40Grados = contadorPaisesConMas40Grados + habitantesIngresado;
		}

		//e)la cantidad de paises de america que tienen menos de 0 grados.
		if(continenteIngresado == 'America' && temperaturaIngresada < 0)
		{
			cantidadPaisesConMenos0Grados ++;
		}

		//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
		if(banderaDelPrimero == 1 && temperaturaIngresada < cantidadPaisesConMenosTemperatura)
		{
			cantidadPaisesConMenosTemperatura = temperaturaIngresada;
			nombrePaisConMenorTemperatura     = paisIngresado;
		}
		else
		{
			if(banderaDelPrimero == 0)
			{
				cantidadPaisesConMenosTemperatura = temperaturaIngresada;
				nombrePaisConMenorTemperatura     = paisIngresado;
				banderaDelPrimero                 = 1;
			}
		}
	}// fin del for

	//f)el promedio de habitantes entre los paises ingresados.
	promedioHabitantes = totalHabitantes / contador;

	//g)el promedio de habitantes entre los paises que superan los 40 grados 
	promedioPaisesConMas40Grados = cantidadPaisesConMas40Grados / contadorPaisesConMas40Grados;


	//el continente (validar entre america , asia , europa ,africa y oceania) 

	//i) que continente tiene mas habitantes.
	//america
	if(totalHabitantesAmerica > totalHabitantesAsia && totalHabitantesAmerica > totalHabitantesEuropa && totalHabitantesAmerica > totalHabitantesAfrica && totalHabitantesAmerica > totalHabitantesOceania)
	{
		continenteConMasHAbitantes = 'America';    
	}
	else
	{//else1
		//asia
		if(totalHabitantesAsia > totalHabitantesAmerica && totalHabitantesAsia > totalHabitantesEuropa && totalHabitantesAsia > totalHabitantesAfrica && totalHabitantesAsia > totalHabitantesOceania)
		{
			continenteConMasHAbitantes = 'Asia';    
		}
		else
		{//else2
			//europa
			if(totalHabitantesEuropa > totalHabitantesAmerica && totalHabitantesEuropa > totalHabitantesAsia && totalHabitantesEuropa > totalHabitantesAfrica && totalHabitantesEuropa > totalHabitantesOceania)
			{
				continenteConMasHAbitantes = 'Europa';    
			}
			else
			{//else3
				//africa
				if(totalHabitantesAfrica > totalHabitantesAmerica && totalHabitantesAfrica > totalHabitantesEuropa && totalHabitantesAfrica > totalHabitantesAsia && totalHabitantesAfrica > totalHabitantesOceania)
				{
					continenteConMasHAbitantes = 'Africa';    
				}
				else
				{//else4
					//africa
					if(totalHabitantesOceania > totalHabitantesAmerica && totalHabitantesOceania > totalHabitantesEuropa && totalHabitantesOceania > totalHabitantesAsia && totalHabitantesOceania > totalHabitantesAfrica)
					{
						continenteConMasHAbitantes = 'Oceania';    
					}
				}//else4
			}//else3
		}//else2
	}//else1

	//a)La cantidad de temperaturas pares.
	if(temperaturasPares > 0)
	{
	alert("La cantidad de temperaturas pares: " + temperaturasPares)
	console.log("La cantidad de temperaturas pares: " + temperaturasPares)
	}

	//b)la cantidad de temperaturas impares de europa.
	if(temperaturasImparesEnEuropa > 0)
	{
	alert("La cantidad de temperaturas impares en europa: " + temperaturasImparesEnEuropa)
	console.log("La cantidad de temperaturas impares en europa: " + temperaturasImparesEnEuropa)
	}

	//c)El nombre del pais con menos habitantes 
	alert("El pais con menos habitantes es: " + nombrePaisConMenosHabitantes) 
	console.log("El pais con menos habitantes es: " + nombrePaisConMenosHabitantes)

	//d)la cantidad de paises que superan los 40 grados.
	alert("La cantidad de paises que superan los 40 grados: " + cantidadPaisesConMas40Grados) 
	console.log("La cantidad de paises que superan los 40 grados: " + cantidadPaisesConMas40Grados)

	//e)la cantidad de paises de america que tienen menos de 0 grados.
	alert("La cantidad de paises de america que tienen menos de 0 grados.: " + cantidadPaisesConMenos0Grados) 
	console.log("La cantidad de paises de america que tienen menos de 0 grados.: " + cantidadPaisesConMenos0Grados)

	//f)el promedio de habitantes entre los paises ingresados.
	alert("El promedio de habitantes entre los paises ingresados: " + promedioHabitantes + " millones") 
	console.log("El promedio de habitantes entre los paises ingresados: " + promedioHabitantes + " millones")

	//g)el promedio de habitantes entre los paises que superan los 40 grados 
	alert("El promedio de habitantes entre los paises que superan los 40 grados: " + contadorPaisesConMas40Grados + " millones") 
	console.log("El promedio de habitantes entre los paises que superan los 40 grados: " + contadorPaisesConMas40Grados + " millones")

	//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
	alert("La temperatura minima ingresada es: " + cantidadPaisesConMenosTemperatura + " grados y corresponde a: " + nombrePaisConMenorTemperatura) 
	console.log("La temperatura mínima ingresada es: " + cantidadPaisesConMenosTemperatura + " y corresponde a: " + nombrePaisConMenorTemperatura)

	//i) que continente tiene mas habitantes.
	alert("El continente con mas habitantes es: " + continenteConMasHAbitantes) 
	console.log("El continente con mas habitantes es: " + continenteConMasHAbitantes)

} // fin de la funcion
/*
1: america - argentina - 40 hab   - pobreza 2  - temp 26
2: america - brasil    - 30 hab   - pobreza 1  - temp 45
3: europa  - españa    - 45 hab   - pobreza 3  - temp 15
4: asia    - japon     - 70 hab   - pobreza 3  - temp 12
5: oceania - australia - 60 hab   - pobreza 2  - temp -5
*/
/* ---------------------------------------------------------------------------------------------------- */
/*For 12 (lo anterior mas..--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , 
... solo si los hay
*/
/*	
function mostrar()
{
	var contador;
	var nombreIngresado;
	var sexoIngresado;
	var edadIngresada;
	var alturaIngresada;
	var alturaPersonaMasAlta;
	var nombrePersonaMasAlta;
	var sexoPersonaMasAlta;
	var banderaDelPrimero;
	var nombreMujerMasJoven;
	var edadMujerMasJoven;

	nombreIngresado      = '';
	sexoIngresado        = 0;
	edadIngresada        = 0;
	alturaIngresada      = 0;
	banderaDelPrimero    = 0;

	for(contador = 0 ; contador < 3; contador ++)
	{

		//nombre
		nombreIngresado = prompt("Ingrese nombre: ");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("ERROR. Ingrese nombre: ");
		}

		//altura
		alturaIngresada = prompt("Ingrese su altura: ");
		alturaIngresada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada < 120 && alturaIngresada > 210)
		{
			alturaIngresada   = prompt("ERROR. Ingrese su altura: ");
			alturaIngresada   = parseInt(alturaIngresada);
		}		

		//sexo
		sexoIngresado = prompt("Ingrese 'f' para femenino y 'm' para masculino: ");
		while(sexoIngresado != 'f' && sexoIngresado != 'm')
		{
			sexoIngresado = prompt("ERROR. Ingrese 'f' para femenino y 'm' para masculino: ");
		}

		//edad (validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES)
		edadIngresada = prompt("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || sexoIngresado == 'm' && edadIngresada > 12)
		{
			edadIngresada = prompt("ERROR. Debe ser hombre menor de 12 anios. Ingrese su edad: ");
			edadIngresada = parseInt(edadIngresada);
		}
			
		while(isNaN(edadIngresada) == true || sexoIngresado == 'f' && edadIngresada < 10 || edadIngresada > 19)
		{
			edadIngresada = prompt("ERROR. Debe ser mujer adolecente. Ingrese su edad: ");
			edadIngresada = parseInt(edadIngresada);
		}

		console.log("Persona #" + (contador + 1));
		console.log("Nombre: " + nombreIngresado);
		console.log("Sexo: " + sexoIngresado);
		console.log("Edad: " + edadIngresada);
		console.log("Altura: " + alturaIngresada);	

		if(banderaDelPrimero == 0 || alturaIngresada > alturaPersonaMasAlta)
		{
			banderaDelPrimero    = 1; 
			alturaPersonaMasAlta = alturaIngresada;
			sexoPersonaMasAlta   = sexoIngresado;
			nombrePersonaMasAlta = nombreIngresado;
		}

		//de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito
		if(sexoIngresado == 'f')
		{
			if(edadIngresada < edadMujerMasJoven)
			{
				banderaDelPrimero   = 1; 
				edadMujerMasJoven   = edadIngresada;
				edadMujerMasJoven   = parseInt(edadMujerMasJoven);
				nombreMujerMasJoven = nombreIngresado;
			}
			else
			{
				edadMujerMasJoven   = edadIngresada;
				edadMujerMasJoven   = parseInt(edadMujerMasJoven);
				nombreMujerMasJoven = nombreIngresado;
			}
	
		}
	}//fin del for

	alert("La persona mas alta es " + sexoPersonaMasAlta + " y se llama " + nombrePersonaMasAlta);
	console.log("La persona mas alta es " + sexoPersonaMasAlta + " y se llama " + nombrePersonaMasAlta);

	alert("El nombre de la mujer mas joven es " + nombreMujerMasJoven);
	console.log("El nombre de la mujer mas joven es " + nombreMujerMasJoven);

 // 10 a 19 adolecente
}//FIN DE LA FUNCIÃ“N
*/
/* ---------------------------------------------------------------------------------------------------- */
/*For 11 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 
y que las mujeres sean ADOLESCENTES), altura(rangos que quiera)) ... informar el sexo y 
nombre de la persona mas alta
*/
/*
function mostrar()
{
	var contador;
	var nombreIngresado;
	var sexoIngresado;
	var edadIngresada;
	var alturaIngresada;
	var alturaPersonaMasAlta;
	var nombrePersonaMasAlta;
	var sexoPersonaMasAlta;
	var banderaDelPrimero;

	nombreIngresado      = '';
	sexoIngresado        = 0;
	edadIngresada        = 0;
	alturaIngresada      = 0;
		banderaDelPrimero = 0;

	for(contador = 0 ; contador < 3; contador ++)
	{

		//nombre
		nombreIngresado = prompt("Ingrese nombre: ");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("ERROR. Ingrese nombre: ");
		}

		//altura
		alturaIngresada = prompt("Ingrese su altura: ");
		alturaIngresada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada < 120 && alturaIngresada > 210)
		{
			alturaIngresada   = prompt("ERROR. Ingrese su altura: ");
			alturaIngresada   = parseInt(alturaIngresada);
		}		

		//sexo
		sexoIngresado = prompt("Ingrese 'f' para femenino y 'm' para masculino: ");
		while(sexoIngresado != 'f' && sexoIngresado != 'm')
		{
			sexoIngresado = prompt("ERROR. Ingrese 'f' para femenino y 'm' para masculino: ");
		}

		//edad (validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES)
		edadIngresada = prompt("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || sexoIngresado == 'm' && edadIngresada > 12)
		{
			edadIngresada = prompt("ERROR. Debe ser hombre menor de 12 anios. Ingrese su edad: ");
			edadIngresada = parseInt(edadIngresada);
		}
			
		while(isNaN(edadIngresada) == true || sexoIngresado == 'f' && edadIngresada < 10 || edadIngresada > 19)
		{
			edadIngresada = prompt("ERROR. Debe ser mujer adolecente. Ingrese su edad: ");
			edadIngresada = parseInt(edadIngresada);
		}

		console.log("Persona #" + (contador + 1));
		console.log("Nombre: " + nombreIngresado);
		console.log("Sexo: " + sexoIngresado);
		console.log("Edad: " + edadIngresada);
		console.log("Altura: " + alturaIngresada);	

		if(banderaDelPrimero == 0 || alturaIngresada > alturaPersonaMasAlta)
		{
			banderaDelPrimero    = 1; 
			alturaPersonaMasAlta = alturaIngresada;
			sexoPersonaMasAlta   = sexoIngresado;
			nombrePersonaMasAlta = nombreIngresado;
		}

	}//fin del for

	alert("La persona mas alta es " + sexoPersonaMasAlta + " y se llama " + nombrePersonaMasAlta);
 // 10 a 19 adolecente
}//FIN DE LA FUNCIÃ“N
*/

/* ---------------------------------------------------------------------------------------------------- */
/*
For 10 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 
y que las mujeres sean mayores de edad), altura(rangos que quiera))
*/
/*
function mostrar()
{
	var contador;
	var nombreIngresado;
	var sexoIngresado;
	var edadIngresada;
	var alturaIngresada;

	nombreIngresado = '';
	sexoIngresado   = 0;
	edadIngresada   = 0;
	alturaIngresada = 0;

	for(contador = 0 ; contador < 5; contador ++)
	{
		//nombre
		nombreIngresado = prompt("Ingrese nombre: ");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("ERROR. Ingrese nombre: ");
		}

		//sexo
		sexoIngresado = prompt("Ingrese 'f' para femenino y 'm' para masculino: ");
		while(sexoIngresado != 'f' && sexoIngresado != 'm')
		{
			sexoIngresado = prompt("ERROR. Ingrese 'f' para femenino y 'm' para masculino: ");
		}

		//edad (validar que solo sean hombres no mayores a 12 y que las mujeres sean mayores de edad)
		edadIngresada = prompt("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || sexoIngresado == 'm' && edadIngresada > 12)
		{
			edadIngresada = prompt("ERROR. Debe ser hombre menor de 12 anios. Ingrese su edad: ");
			edadIngresada = parseInt(edadIngresada);
		}
			
		while(isNaN(edadIngresada) == true || sexoIngresado == 'f' && edadIngresada < 18)
		{
			edadIngresada = prompt("ERROR. Debe ser mujer mayor de 18 anios. Ingrese su edad: ");
			edadIngresada = parseInt(edadIngresada);
		}

		//altura
		alturaIngresada = prompt("Ingrese su altura: ");
		alturaIngresada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada < 120 && alturaIngresada > 210)
		{
			alturaIngresada = prompt("ERROR. Ingrese su altura: ");
			alturaIngresada = parseInt(alturaIngresada);
		}
	console.log("Persona #" + (contador + 1));
	console.log("Nombre: " + nombreIngresado);
	console.log("Sexo: " + sexoIngresado);
	console.log("Edad: " + edadIngresada);
	console.log("Altura: " + alturaIngresada);	
	}//fin del for

}//FIN DE LA FUNCIÃ“N
*/