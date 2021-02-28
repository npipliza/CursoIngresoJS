/*Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var contador;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var tipoProducto;
	var cantidadProductos;
	var cantidadAlcohol;
	var cantidadAlcoholMasBajo;
	var cantidadJabon;
	var cantidadBarbijo;
	var cantidadMaxima;
	var banderaDelPrimero;
	var productoMasCantidad;
	var promedio;
	var precioIngresado;
	var precioAlcoholMasBajo;
	var marca;
	var fabricante;
	var fabricanteAlcoholMasBajo;
	var tipoProductoMaximo;

	contadorBarbijo          = 0;
	contadorJabon            = 0;
	contadorAlcohol          = 0;
	tipoProducto             = 0;
	cantidadProductos        = 0;
	cantidadAlcohol          = 0;
	cantidadAlcoholMasBajo   = 0;
	cantidadJabon            = 0;
	cantidadBarbijo          = 0;
	cantidadMaxima           = 0;
	banderaDelPrimero        = 0;
	productoMasCantidad      = 0;
	promedio                 = 0;
	precioIngresado          = 0;
	precioAlcoholMasBajo     = 0;
	marca                    = '';
	fabricante               = '';
	fabricanteAlcoholMasBajo = '';
	tipoProductoMaximo       = '';
	
	for(contador = 0; contador < 2; contador ++)
	{
		contador = contador + 1;

		// TIPO PRODUCTO
		tipoProducto = prompt("Ingrese producto: 1 para barbijo, 2 para jabon o 3 para alcohol. Nro: " + contador);
		tipoProducto = parseInt(tipoProducto);
		while(isNaN(tipoProducto) == true || tipoProducto != 1 && tipoProducto != 2 && tipoProducto != 3)
		{
			tipoProducto = prompt("ERROR, debe ingresar 1 para barbijo, 2 para jabon o 3 para alcohol.");
			tipoProducto = parseInt(tipoProducto);
		}

		//CANTIDAD PRODUCTOS
		cantidadProductos = prompt("Ingrese la cantidad");
		cantidadProductos = parseInt(cantidadProductos);	
		while(isNaN(cantidadProductos) == true || cantidadProductos < 1 || cantidadProductos > 1000)
		{
			cantidadProductos = cantidadProductos + 1;
			cantidadProductos = prompt("ERROR, debe ingresar una cantidad entre 1 y 1000.");
			cantidadProductos = parseInt(cantidadProductos);
		}
			if(banderaDelPrimero == 0)
			{
				cantidadMaxima     = cantidadProductos;    
				tipoProductoMaximo = tipoProducto;
				banderaDelPrimero  = 1; 
			}
			else
			{
				if(tipoProducto > cantidadMaxima)
				{
					tipoProducto       = cantidadProductos;    
					tipoProductoMaximo = cantidadMaxima;
				}				
			}

		// PRECIO PRODUCTOS
		precioIngresado = prompt("Ingrese precio");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("ERROR, debe ingresar un precio entre 100 y 300.");
			precioIngresado = parseInt(precioIngresado);
		}
	
		switch(tipoProducto)
		{
		case 1:
			tipoProducto    = "barbijo";
			cantidadBarbijo = cantidadBarbijo + cantidadProductos;
			contadorBarbijo ++;
		break;

		case 2:
			tipoProducto  = "jabon";
			cantidadJabon = cantidadJabon + cantidadProductos;
			contadorJabon ++;
		break;

		case 3:
			tipoProducto    = "alcohol";
			cantidadAlcohol = cantidadAlcohol + cantidadProductos;
			contadorAlcohol ++;
		break;	
		}

		// MARCA Y FABRICANTE
		marca = prompt("Ingrese marca");
		while(isNaN(marca) == false)
		{
			marca = prompt("ERROR, ingrese el nombre de la marca.");
		}
		fabricante = prompt("Ingrese fabricante");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("ERROR, ingrese el nombre del fabricante.");
		}

	if(tipoProducto == "alcohol")
	{
		productoMasCantidad = "alcohol";
		promedio            = cantidadAlcohol / contadorAlcohol;

		if(banderaDelPrimero == 0)
		{
			precioAlcoholMasBajo     = precioIngresado;    
			cantidadAlcoholMasBajo   = cantidadProductos;
			fabricanteAlcoholMasBajo = fabricante;
			banderaDelPrimero        = 1; 
		}
		else
		{
			if(precioIngresado < precioAlcoholMasBajo)
			{
				precioAlcoholMasBajo     = precioIngresado;    
				cantidadAlcoholMasBajo   = cantidadProductos;
				fabricanteAlcoholMasBajo = fabricante;
			}				
		}
	}
	else
	{
		if(tipoProducto == "jabon")
		{
			productoMasCantidad = "jabon";
			promedio            = cantidadJabon / contadorJabon;
		}
		else
		{
			productoMasCantidad = "barbijo";
			promedio            = cantidadBarbijo / contadorBarbijo;
		}
	}
} //fin del for 

	if(cantidadAlcohol > 0)
	{
		alert("Del mas barato de los alcohol, la cantidad de unidades es: " + cantidadAlcohol + " y el fabricante es:" + fabricanteAlcoholMasBajo);
	}

	alert("El tipo con mas unidades es: " + tipoProducto + " y el promedio por compra es: " + promedio);

	if(cantidadJabon > 0)
	{
		alert("Las unidades de jabones que hay en total es de: " + cantidadJabon);
	}

	console.log("Del mas barato de los alcohol, la cantidad de unidades es: " + cantidadAlcohol + " y el fabricante es: "+ fabricanteAlcoholMasBajo);
	console.log("El tipo con mas unidades es: " + tipoProducto + " y el promedio por compra es: " + promedio);
	console.log("Las unidades de jabones que hay en total es de: " + cantidadJabon);

} //fin de la funcion

/*
barbijo   precio 300   cantidad 1    marca Buno   fabricante BFuno
barbijo   precio 250   cantidad 1    marca Bdos   fabricante BFdos
jabon     precio 200   cantidad 1    marca Juno   fabricante JFuno
alcohol   precio 100   cantidad 1    marca Auno   fabricante AFuno
alcohol   precio 110   cantidad 1    marca Ados   fabricante AFdos
*/


/* funcion con while 
function mostrar()
{
	var contador;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var tipoProducto;
	var cantidadProductos;
	var cantidadAlcohol;
	var cantidadAlcoholMasBajo;
	var cantidadJabon;
	var cantidadBarbijo;
	var cantidadMaxima;
	var banderaDelPrimero;
	var productoMasCantidad;
	var promedio;
	var precioIngresado;
	var precioAlcoholMasBajo;
	var marca;
	var fabricante;
	var fabricanteAlcoholMasBajo;
	var tipoProductoMaximo;

	contador                 = 0;
	contadorBarbijo          = 0;
	contadorJabon            = 0;
	contadorAlcohol          = 0;
	tipoProducto             = 0;
	cantidadProductos        = 0;
	cantidadAlcohol          = 0;
	cantidadAlcoholMasBajo   = 0;
	cantidadJabon            = 0;
	cantidadBarbijo          = 0;
	cantidadMaxima           = 0;
	banderaDelPrimero        = 0;
	productoMasCantidad      = 0;
	promedio                 = 0;
	precioIngresado          = 0;
	precioAlcoholMasBajo     = 0;
	marca                    = '';
	fabricante               = '';
	fabricanteAlcoholMasBajo = '';
	tipoProductoMaximo       = '';
	
		//cambiar a for
	while(contador < 2)
	{
		contador = contador + 1;

		// TIPO PRODUCTO
		tipoProducto = prompt("Ingrese producto: 1 para barbijo, 2 para jabon o 3 para alcohol. Nro: " + contador);
		tipoProducto = parseInt(tipoProducto);
		while(isNaN(tipoProducto) == true || tipoProducto != 1 && tipoProducto != 2 && tipoProducto != 3)
		{
			tipoProducto = prompt("ERROR, debe ingresar 1 para barbijo, 2 para jabon o 3 para alcohol.");
			tipoProducto = parseInt(tipoProducto);
		}

		//CANTIDAD PRODUCTOS
		cantidadProductos = prompt("Ingrese la cantidad");
		cantidadProductos = parseInt(cantidadProductos);	
		while(isNaN(cantidadProductos) == true || cantidadProductos < 1 || cantidadProductos > 1000)
		{
			cantidadProductos = cantidadProductos + 1;
			cantidadProductos = prompt("ERROR, debe ingresar una cantidad entre 1 y 1000.");
			cantidadProductos = parseInt(cantidadProductos);
		}
			if(banderaDelPrimero == 0)
			{
				cantidadMaxima     = cantidadProductos;    
				tipoProductoMaximo = tipoProducto;
				banderaDelPrimero  = 1; 
			}
			else
			{
				if(tipoProducto > cantidadMaxima)
				{
					tipoProducto       = cantidadProductos;    
					tipoProductoMaximo = cantidadMaxima;
				}				
			}

		// PRECIO PRODUCTOS
		precioIngresado = prompt("Ingrese precio");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("ERROR, debe ingresar un precio entre 100 y 300.");
			precioIngresado = parseInt(precioIngresado);
		}
	
		switch(tipoProducto)
		{
		case 1:
			tipoProducto    = "barbijo";
			cantidadBarbijo = cantidadBarbijo + cantidadProductos;
			contadorBarbijo ++;
		break;

		case 2:
			tipoProducto  = "jabon";
			cantidadJabon = cantidadJabon + cantidadProductos;
			contadorJabon ++;
		break;

		case 3:
			tipoProducto    = "alcohol";
			cantidadAlcohol = cantidadAlcohol + cantidadProductos;
			contadorAlcohol ++;
		break;	
		}

		// MARCA Y FABRICANTE
		marca = prompt("Ingrese marca");
		while(isNaN(marca) == false)
		{
			marca = prompt("ERROR, ingrese el nombre de la marca.");
		}
		fabricante = prompt("Ingrese fabricante");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("ERROR, ingrese el nombre del fabricante.");
		}

	if(tipoProducto == "alcohol")
	{
		productoMasCantidad = "alcohol";
		promedio            = cantidadAlcohol / contadorAlcohol;

		if(banderaDelPrimero == 0)
		{
			precioAlcoholMasBajo     = precioIngresado;    
			cantidadAlcoholMasBajo   = cantidadProductos;
			fabricanteAlcoholMasBajo = fabricante;
			banderaDelPrimero        = 1; 
		}
		else
		{
			if(precioIngresado < precioAlcoholMasBajo)
			{
				precioAlcoholMasBajo     = precioIngresado;    
				cantidadAlcoholMasBajo   = cantidadProductos;
				fabricanteAlcoholMasBajo = fabricante;
			}				
		}
	}
	else
	{
		if(tipoProducto == "jabon")
		{
			productoMasCantidad = "jabon";
			promedio            = cantidadJabon / contadorJabon;
		}
		else
		{
			productoMasCantidad = "barbijo";
			promedio            = cantidadBarbijo / contadorBarbijo;
		}
	}
} //fin del while contador 5

	if(cantidadAlcohol > 0)
	{
		alert("Del mas barato de los alcohol, la cantidad de unidades es: " + cantidadAlcohol + " y el fabricante es:" + fabricanteAlcoholMasBajo);
	}

	alert("El tipo con mas unidades es: " + tipoProducto + " y el promedio por compra es: " + promedio);

	if(cantidadJabon > 0)
	{
		alert("Las unidades de jabones que hay en total es de: " + cantidadJabon);
	}

	console.log("Del mas barato de los alcohol, la cantidad de unidades es: " + cantidadAlcohol + " y el fabricante es: "+ fabricanteAlcoholMasBajo);
	console.log("El tipo con mas unidades es: " + tipoProducto + " y el promedio por compra es: " + promedio);
	console.log("Las unidades de jabones que hay en total es de: " + cantidadJabon);

} //fin de la funcion
*/
/*
barbijo   precio 300   cantidad 1    marca Buno   fabricante BFuno
barbijo   precio 250   cantidad 1    marca Bdos   fabricante BFdos
jabon     precio 200   cantidad 1    marca Juno   fabricante JFuno
alcohol   precio 100   cantidad 1    marca Auno   fabricante AFuno
alcohol   precio 110   cantidad 1    marca Ados   fabricante AFdos
*/


