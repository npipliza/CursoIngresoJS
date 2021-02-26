/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso() 
{
 	var edadIngresada;
 	var sexoIngresado;
	var sexo;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroDeLegajo;	
	var nacionalidad;
	var mensajeEdad;
	var mensajeSexo;
	var mensajeEstadoCivil;
	var mensajeSueldo;
	var mensajeLegajo;
	var mensajeNacionalidadUno;
	var mensajeNacionalidadDos;

// INGRESAR EDAD
	mensajeEdad   = "Ingrese su edad: ";
	edadIngresada = prompt(mensajeEdad);
	edadIngresada = parseInt(edadIngresada);

	while(isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 90) //Edad, entre 18 y 90 a�os inclusive.
	{			
		edadIngresada = alert("ATENCION: Debe tener entre 18 y 90 anios inclusive para continuar.");
		edadIngresada = prompt(mensajeEdad);
		edadIngresada = parseInt(edadIngresada);
	}

// INGRESAR SEXO
    mensajeSexo   = "ingrese f para femenino o m para masculino.";
	sexoIngresado = prompt(mensajeSexo);

	while(sexoIngresado != "f" && sexoIngresado != "m") //Sexo, ?M? para masculino y ?F? para femenino
	{
		sexoIngresado = alert("ATENCION: ingrese unicamente la letra f o m, segun corresponda.");
		sexoIngresado = prompt(mensajeSexo);
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
	mensajeEstadoCivil   = "Estado civil. Ingrese: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos";
	estadoCivilIngresado = prompt(mensajeEstadoCivil);
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4) //Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	{
		estadoCivilIngresado = alert("ATENCION! Debe ingresar numero 1, 2, 3 o 4, segun corresponda.");
		estadoCivilIngresado = prompt(mensajeEstadoCivil);
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
/* 		if(estadoCivilIngresado == 1)
		{
			estadoCivilIngresado = "Soltero";
		}
		else
		{
			if(estadoCivilIngresado == 2)	
			{
				estadoCivilIngresado = "Casado";
			}
			else
			{
				if(estadoCivilIngresado == 3)
				{
					estadoCivilIngresado = "Divorciado";
				}
				else
				{
					estadoCivilIngresado = "Viudo";
				}
			}
		}
 */
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

// INGRESAR SUELDO	
	mensajeSueldo = "Ingrese sueldo bruto:";
	sueldoBruto   = prompt(mensajeSueldo);
	sueldoBruto   = parseInt(sueldoBruto);

	while(isNaN(sueldoBruto) == true || sueldoBruto < 7999) //Sueldo bruto, no menor a 8000.
	{
		sueldoBruto = alert("Para continuar debe ingresar un sueldo bruto igual a $8000 o mayor.");
		sueldoBruto = prompt(mensajeSueldo);
		sueldoBruto = parseInt(sueldoBruto);
	}

// INGRESAR LEGAJO
	mensajeLegajo  = "Ingrese su legajo:";
	numeroDeLegajo = prompt(mensajeLegajo);
	numeroDeLegajo = parseInt(numeroDeLegajo);

	while(isNaN(numeroDeLegajo) == true || numeroDeLegajo < 1000 || numeroDeLegajo > 9999) //N�mero de legajo, num�rico de 4 cifras, sin ceros a la izquierda.
	{
		numeroDeLegajo = alert("Debe ingresar un legajo valido, de 4 cifras.");
		numeroDeLegajo = prompt(mensajeLegajo);
		numeroDeLegajo = parseInt(numeroDeLegajo);
	}

// INGRESAR NACIONALIDAD
	mensajeNacionalidadUno = "Para continuar debe ingresar la letra A, E o N, segun corresponda.";
	mensajeNacionalidadDos = "Ingrese su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados";
	nacionalidad           = prompt(mensajeNacionalidadDos);

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") //Nacionalidad, ?A? para argentinos, ?E? para extranjeros, ?N? para nacionalizados.
	{
		nacionalidad = alert(mensajeNacionalidadUno);
		nacionalidad = prompt(mensajeNacionalidadDos);
	}
/* 	if(nacionalidad == "A")
	{
		nacionalidad = "Argentino"
	}
	else
	{
		if(nacionalidad == "E")
		{
			nacionalidad = "Extranjero"
		}
		else
		{
			nacionalidad = "Nacionalizado"
		}
	}
 */
	switch(nacionalidad)
	{
		case "A":
		nacionalidad = "Argentino";
		break;

		case "E":
		nacionalidad = "Extranjero";
		break;

		case "N":
		nacionalidad = "Nacionalizado";
		break;
	}

	document.getElementById('txtIdEdad').value         = edadIngresada + " anios.";
	document.getElementById('txtIdSexo').value         = sexo;
	document.getElementById('txtIdEstadoCivil').value  = estadoCivilIngresado;
	document.getElementById('txtIdSueldo').value       = "$" + sueldoBruto;
	document.getElementById('txtIdLegajo').value       = numeroDeLegajo;
	document.getElementById('txtIdNacionalidad').value = nacionalidad;
            
} // fin de la funcion