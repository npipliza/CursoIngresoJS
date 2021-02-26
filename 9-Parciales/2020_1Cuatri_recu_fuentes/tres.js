/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
*/
function mostrar()
{
	var nombreIngresado;
	var nacionalidadIngresada;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var nacionalidadTemperaturaMayor;
	var mayoresDeEdadViudos;
	var cantidadSolterosyViudos;
	var mayores60temperatura38;
	var promedioEdadMujeresCasadas;
	var temperaturaMayor;
	var sumaTemperatura;
	var respuesta;
	var banderaDelPrimero;

	nombreIngresado            = '';
	nacionalidadIngresada      = '';
	edadIngresada              = 0;
	sexoIngresado              = '';
	estadoCivilIngresado       = 0;
    temperaturaIngresada       = 0;
	cantidadSolterosyViudos    = 0;
	promedioEdadMujeresCasadas = 0;
	sumaTemperatura            = 0;
	respuesta                  = 'si';
	banderaDelPrimero          = 0;

	while(respuesta == 'si')
	{
		// INGRESAR NOMBRE
		nombreIngresado = prompt("Ingrese su nombre: ");
		while(isNaN(nombreIngresado) == false) 
		{
			nombreIngresado = prompt("ERROR: Ingrese su nombre: ");
		}

		// INGRESAR NACIONALIDAD
		nacionalidadIngresada = prompt("Ingrese su nacionalidad: ");
		while(isNaN(nacionalidadIngresada) == false) 
		{
			nacionalidadIngresada = prompt("ERROR: Ingrese su nacionalidad: ");
		}
		
		// INGRESAR EDAD
		edadIngresada = prompt("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true) 
		{			
			edadIngresada = prompt("ERROR. Ingrese su edad: ");
			edadIngresada = parseInt(edadIngresada);
		}

		// INGRESAR SEXO
		sexoIngresado = prompt("ingrese f para femenino o m para masculino.");
		while(sexoIngresado != "f" && sexoIngresado != "m") 
		{
			sexoIngresado = prompt("ATENCION: ingrese unicamente la letra f o m, segun corresponda.");
		}
			if(sexoIngresado == "f")
			{
				sexo = "Femenino"
			}
			else
			{
				sexo = "Masculino"
			}

		// INGRESAR ESTADO CIVIL
		estadoCivilIngresado = prompt("Ingrese: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);

		while(isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4) 
		{
			estadoCivilIngresado = prompt("ATENCION! Debe ingresar 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
			estadoCivilIngresado = parseInt(estadoCivilIngresado);
		}

		// INGRESAR TEMPERATURA
		temperaturaIngresada = prompt("Ingrese su temperatura: ");
		temperaturaIngresada = parseFloat(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) == true || temperaturaIngresada < 35 && temperaturaIngresada > 40) 
		{
			temperaturaIngresada = prompt("ERROR: Ingrese su temperatura: ");
			temperaturaIngresada = parseFloat(temperaturaIngresada);
		}

		switch(estadoCivilIngresado)
		{
			case 1:
			estadoCivilIngresado = "Soltero";
			break;

			case 2:
			estadoCivilIngresado = "Casado";
			break;

			case 3:
			estadoCivilIngresado = "Divorciado";
			break;

			case 4:
			estadoCivilIngresado = "Viudo";
			break;						 
		}

		if(temperaturaIngresada > 0)
		{
			if(banderaDelPrimero == 0)
			{
				temperaturaMayor             = temperaturaMayor + temperaturaIngresada;
				nacionalidadTemperaturaMayor = nacionalidadIngresada;
				banderaDelPrimero            = 1; 
			}
			else
			{
				if(temperaturaIngresada > temperaturaMayor)
				{
					temperaturaMayor             = temperaturaMayor + temperaturaIngresada;
					nacionalidadTemperaturaMayor = nacionalidadIngresada;
				}				
			}
		}
	
	//	sumaTemperatura              = sumaTemperatura + temperaturaIngresada;
	//	temperaturaMayor             = temperaturaMayor + temperaturaIngresada;
	//	nacionalidadTemperaturaMayor = nacionalidadIngresada;

	respuesta = prompt("Ingrese si para continuar cargando datos.");
	}// fin del while si

	//a) la Nacionalidad de la persona con mas temperatura.
	alert("La persona con mas temperatura es: " + nacionalidadTemperaturaMayor);
	console.log("La persona con mas temperatura es: " + nacionalidadTemperaturaMayor);

	//b) Cuantos mayores de edad( más de 17) estan solteros
	alert("Los mayores de edad viudos son:" + mayoresDeEdadViudos);
	console.log("Los mayores de edad viudos son:" + mayoresDeEdadViudos);

	//c) La cantidad de Mujeres que hay solteras o viudas.
	alert("La cantidad de hombres que hay solteros o viudos: " + cantidadSolterosyViudos);
	console.log("La cantidad de hombres que hay solteros o viudos: " + cantidadSolterosyViudos);

	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	alert("Las personas de mas de 60 anios con mas de 38 grados de temperatura: " + mayores60temperatura38);
	console.log("Las personas de mas de 60 anios con mas de 38° de temperatura: " + mayores60temperatura38);

	//e) El promedio de edad entre las mujeres casadas.
	alert("El promedio de edad entre los hombres solteros es: " + promedioEdadMujeresCasadas);
	console.log("El promedio de edad entre los hombres solteros es: " + promedioEdadMujeresCasadas);

}//fin de la funcion
