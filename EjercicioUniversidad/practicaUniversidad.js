/*
Pipliza Nadia - 1ro C - Estadística
Se requiere generar un sistema para realizar estadísticas sobre los egresados en la universidad.
1. El alumno deberá ingresar:
Nombre del alumno 
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/
function probarEjercicio()
{
	var nombreIngresado;
	var carreraIngresada;
	var estadoCarreraIngresado;
	var sexoIngresado;
	var edadIngresada;
	var notaIngresada;
	var contadorAlumnos;
	var respuesta;
	var totalAlumnosProgramacion;
	var totalAlumnosPsicologia; 
	var totalAlumnosDisenioGrafico;
	var cantidadMujeresProgramacion;
	var cantidadAlumnosNoBinarios;
	var contadorCarreraFinalizado;
	var promedioCarreraFinalizado;
	var banderaDelPrimero;
	var edadAlumnoMasViejo;
	var nombreAlumnoMasViejo;
	var sexoAlumnoMasViejo;
	var notaMejorAlumnoPsicologia;
	var nombreMejorAlumnoPsicologia;
	var estadoMejorAlumnoPsicologia;
	var carreraConMasAlumnos;
	var notasCarreraFinalizado;
	var sumaAlumnosProgramacion;
	var sumaAlumnosPsicologia;
	var sumaAlumnosDisenioGrafico;

	nombreIngresado             = '';
	carreraIngresada            = '';
	estadoCarreraIngresado      = '';
	sexoIngresado               = '';
	edadIngresada               = 0;
	notaIngresada               = 0;
	contadorAlumnos             = 0;
	totalAlumnosProgramacion    = 0;
	totalAlumnosPsicologia      = 0;
	totalAlumnosDisenioGrafico  = 0;
	sumaAlumnosProgramacion     = 0;
	sumaAlumnosPsicologia       = 0;
	sumaAlumnosDisenioGrafico   = 0;
	cantidadMujeresProgramacion = 0;
	cantidadAlumnosNoBinarios   = 0;
	contadorCarreraFinalizado   = 0;
	promedioCarreraFinalizado   = 0;
	notaMejorAlumnoPsicologia   = 0;
	edadAlumnoMasViejo          = 0;
	respuesta                   = 'si';
	banderaDelPrimero           = 0;
	notasCarreraFinalizado      = 0;

	while(respuesta == 'si')
	{
		contadorAlumnos ++;

		//nombre
		nombreIngresado = prompt("Ingrese nombre: ");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("ERROR. Ingrese nombre: ");
		}

		//sexo
		sexoIngresado = prompt("ingrese f o m .");
		while(isNaN(nombreIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt(" ERROR, ingrese f o m .");
		}

		//edad
		edadIngresada = prompt("Ingrese edad, debe ser mayor a 18 anios: ");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || edadIngresada < 18)
		{
			edadAlumnoMasViejo ++;
			edadIngresada = prompt("ERROR. Ingrese edad, debe ser mayor a 18 anios: ");
			edadIngresada = parseInt(edadIngresada);
		}

		//carrera
		carreraIngresada = prompt("Ingrese carrera. Programacion - Psicologia - Disenio Grafico: ");
		while(isNaN(carreraIngresada) == false || carreraIngresada !='Programacion' && carreraIngresada !='Psicologia' && carreraIngresada !='Disenio Grafico')
		{
			carreraIngresada = prompt("ERROR. Ingrese carrera. Programacion - Psicologia - Disenio Grafico: ");
		}
		switch(carreraIngresada)
		{
			case 'Programacion':
				sumaAlumnosProgramacion ++;
			break;

			case 'Psicologia':
				sumaAlumnosPsicologia ++;
			break;

			case 'Disenio Grafico':
				sumaAlumnosDisenioGrafico ++;
			break;
		}

		//estado carrera
		estadoCarreraIngresado = prompt("Ingrese el estado de la carrera. En curso - Abandonado - Finalizado: ");
		while(isNaN(estadoCarreraIngresado) == false || estadoCarreraIngresado !='En curso' && estadoCarreraIngresado !='Abandonado' && estadoCarreraIngresado !='Finalizado')
		{
			estadoCarreraIngresado = prompt("ERROR. Ingrese el estado de la carrera. En curso - Abandonado - Finalizado: ");
		}

		//nota
		notaIngresada = prompt("Ingrese la nota: ");
		notaIngresada = parseInt(notaIngresada);
		while(isNaN(notaIngresada) == true || notaIngresada < 1 && notaIngresada > 10)
		{
			notaIngresada = prompt("ERROR. Debe ser entre 1 y 10, ingrese la nota: ");
			notaIngresada = parseInt(notaIngresada);
		}

		//B. Cantidad total de mujeres que cursan la carrera de programación
		if(carreraIngresada == 'Programacion' && sexoIngresado == 'f')
		{
			cantidadMujeresProgramacion ++;
		}

		//C. Cantidad de alumnos no binarios.
		if(carreraIngresada != 'Programacion')
		{
			cantidadAlumnosNoBinarios ++;
		}

		//D. Promedio de notas de los alumnos finalizantes.
		if(estadoCarreraIngresado == 'Finalizado')
		{
			contadorCarreraFinalizado ++;
			notasCarreraFinalizado = notasCarreraFinalizado + notaIngresada;
		}

		//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
		//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
		if(carreraIngresada == 'Psicologia')
		{
			if(banderaDelPrimero == 1 && edadIngresada > edadAlumnoMasViejo)
			{
				edadAlumnoMasViejo   = edadIngresada;
				nombreAlumnoMasViejo = nombreIngresado;
				sexoAlumnoMasViejo   = sexoIngresado;
			}
			else
			{
				if(banderaDelPrimero == 0)
				{
					edadAlumnoMasViejo   = edadIngresada;
					nombreAlumnoMasViejo = nombreIngresado;
					sexoAlumnoMasViejo   = sexoIngresado;
					banderaDelPrimero    = 1;
				}
			}
		
			if(banderaDelPrimero == 1 && notaIngresada > notaMejorAlumnoPsicologia)
			{
				notaMejorAlumnoPsicologia   = notaIngresada;
				nombreMejorAlumnoPsicologia = nombreIngresado;
				estadoMejorAlumnoPsicologia = estadoCarreraIngresado;
			}
			else
			{
				if(banderaDelPrimero == 0)
				{
					notaMejorAlumnoPsicologia   = notaIngresada;
					nombreMejorAlumnoPsicologia = nombreIngresado;
					estadoMejorAlumnoPsicologia = estadoCarreraIngresado;
					banderaDelPrimero           = 1;
				}
			}
		}

	respuesta = prompt("Ingrese si para continuar ingresando alumnos");
	}// fin del while si

	//A. Cantidad total de alumnos de cada carrera.
	totalAlumnosProgramacion   = sumaAlumnosProgramacion;
	totalAlumnosPsicologia     = sumaAlumnosPsicologia;
	totalAlumnosDisenioGrafico = sumaAlumnosDisenioGrafico;

	//G. ¿Cuál es la carrera que tiene más alumnos?
	//psicologia
	if(totalAlumnosPsicologia > totalAlumnosProgramacion && totalAlumnosPsicologia > totalAlumnosDisenioGrafico)
	{
		carreraConMasAlumnos = 'Psicologia';    
	}
	else
	{//else1
		//programacion
		if(totalAlumnosProgramacion > totalAlumnosPsicologia && totalAlumnosProgramacion > totalAlumnosDisenioGrafico)
		{
			carreraConMasAlumnos = 'Programacion';    
		}
		else
		{//else2
			//disenio grafico
			if(totalAlumnosDisenioGrafico > totalAlumnosPsicologia && totalAlumnosDisenioGrafico > totalAlumnosProgramacion)
			{
				carreraConMasAlumnos = 'Disenio Grafico';    
			}
		}//else2
	}//else1

	promedioCarreraFinalizado = notasCarreraFinalizado / contadorCarreraFinalizado;

	document.write("La cantidad total de alumnos de programacion es: " + totalAlumnosProgramacion + ", de psicologia: " + totalAlumnosPsicologia + " y de disenio grafico: " + totalAlumnosDisenioGrafico);
	document.write("</br>La cantidad total de mujeres que cursan programacion: " + cantidadMujeresProgramacion);
	document.write("</br>La cantidad de alumnos no binarios: " + cantidadAlumnosNoBinarios);
	document.write("</br>Promedio de notas de los alumnos finalizantes: " + promedioCarreraFinalizado);
	if(carreraIngresada == 'Psicologia')
	{
	document.write("</br>El alumno mas viejo en la carrera de psicologia es: " + nombreAlumnoMasViejo + ", sexo: " + sexoAlumnoMasViejo + " y tiene: " + edadAlumnoMasViejo + " anios.");
	document.write("</br>El mejor alumno de psicologia es: " + nombreMejorAlumnoPsicologia + ", su nota: " + notaMejorAlumnoPsicologia + " y el estado de la carrera es: " + estadoMejorAlumnoPsicologia);
	}
	document.write("</br>La carrera que tiene mas alumnos es: " + carreraConMasAlumnos);
	
}// fin de la funcion
/*
nombreuno     f   34   programacion   en curso     5
nombredos     m   18   disenio        finalizado   10
nombretres    f   23   programacion   finalizado   8
nombrecuatro  f   20   psicologia     abandonado   6
*/
		