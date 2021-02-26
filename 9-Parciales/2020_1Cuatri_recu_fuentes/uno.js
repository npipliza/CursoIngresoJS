
/*
Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
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
	var cantidadJabon;
	var cantidadBarbijo;
	var cantidadTotalJabon;
	var cantidadTotalAlcohol;
	var cantidadTotalBarbijo;
	var banderaDelPrimero;
	var productoMasCaro;
	var promedioPorCompra;
	var precioIngresado;
	var precioJabonMasCaro;
	var cantidadJabonMasCaro;
	var marca;
	var fabricante;
	var fabricanteJabonMasCaro;
	var productoConMasUnidades;
	var totalCompra;

	contadorBarbijo      = 0;
	contadorJabon        = 0;
	contadorAlcohol      = 0;
	tipoProducto         = 0;
	cantidadProductos    = 0;
	cantidadAlcohol      = 0;
	cantidadJabon        = 0;
	cantidadJabonMasCaro = 0;
	cantidadBarbijo      = 0;
	banderaDelPrimero    = 0;
	promedioPorCompra    = 0;
	precioIngresado      = 0;
	marca                = '';
	fabricante           = '';
	totalAlcohol         = 0;
	totalJabon           = 0;
	totalBarbijo         = 0;
	cantidadTotalAlcohol = 0;
	cantidadTotalBarbijo = 0;
	cantidadTotalJabon   = 0;
	totalCompra          = 0;
	
	for(contador = 0 ; contador < 3; contador ++)
	{
		//	contador = contador + 1;

		// TIPO PRODUCTO
		tipoProducto = prompt("Ingrese producto: 1 para barbijo, 2 para jabon o 3 para alcohol. Nro: " + (contador + 1));
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

		// MARCA
		marca = prompt("Ingrese marca");
		while(isNaN(marca) == false)
		{
			marca = prompt("ERROR, ingrese el nombre de la marca.");
		}
		// FABRICANTE
		fabricante = prompt("Ingrese fabricante");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("ERROR, ingrese el nombre del fabricante.");
		}

	//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	if(tipoProducto == "jabon")
	{
		if(banderaDelPrimero == 0)
		{
			precioJabonMasCaro     = precioIngresado;    
			cantidadJabonMasCaro   = cantidadProductos;
			fabricanteJabonMasCaro = fabricante;
			banderaDelPrimero      = 1; 
		}
		else
		{
			if(precioIngresado > precioJabonMasCaro)
			{
				precioJabonMasCaro     = precioIngresado;    
				cantidadJabonMasCaro   = cantidadProductos;
				fabricanteJabonMasCaro = fabricante;
			}				
		}
	}

	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	if(cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon)
	{
	  productoConMasUnidades = 'alcohol';    
	  productoMasCaro        = 'alcohol';
	  cantidadTotalAlcohol   = cantidadAlcohol;
	}
	else
	{
	  if(cantidadBarbijo > cantidadAlcohol && cantidadBarbijo > cantidadJabon)
	  {
		productoConMasUnidades = 'barbijo';
		productoMasCaro        = 'barbijo';
		cantidadTotalBarbijo   = cantidadBarbijo;
	  }
	  else
	  {
		if(cantidadJabon > cantidadAlcohol && cantidadJabon > cantidadBarbijo)
		{  
		  productoConMasUnidades = 'jabon';
		  productoMasCaro        = 'jabon';
		  cantidadTotalJabon     = cantidadJabon;
		}
	  }
	  totalCompra       = cantidadTotalAlcohol + cantidadTotalJabon + cantidadTotalBarbijo;
	  promedioPorCompra = totalCompra / cantidadProductos;
	  promedioPorCompra = parseInt(promedioPorCompra);
	}

	//c) Cuántas unidades de Barbijos se compraron en total
	if(tipoProducto == "barbijo")
	{
		if(banderaDelPrimero == 0)
		{
			cantidadBarbijo = cantidadProductos;
			banderaDelPrimero    = 1; 
		}
		else
		{
			if(precioIngresado > precioJabonMasCaro)
			{
				cantidadBarbijo = cantidadProductos;
			}				
		}
	}


} //fin del for 

	if(cantidadJabon > 0)
	{
		alert("Del mas caro de los jabones, la cantidad de unidades es: " + cantidadJabonMasCaro + " y el fabricante es:" + fabricanteJabonMasCaro);
		console.log("Del mas caro de los jabones, la cantidad de unidades es: " + cantidadJabonMasCaro + " y el fabricante es:" + fabricanteJabonMasCaro);
	}

	alert("El tipo con mas unidades es: " + productoConMasUnidades + " y el promedio por compra es: " + promedioPorCompra);
	console.log("El tipo con mas unidades es: " + productoConMasUnidades + " y el promedio por compra es: " + promedioPorCompra);

	alert("Las unidades de barbijos compradas: " + cantidadBarbijo);
	console.log("Las unidades de barbijos compradas: " + cantidadBarbijo);


} //fin de la funcion