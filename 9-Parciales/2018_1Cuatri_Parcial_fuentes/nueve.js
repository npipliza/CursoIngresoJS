function mostrar()
{
    var marcaDelProducto;
    var pesoDelProducto;
    var temperaturaAlmacenaje;
    var cuentaTemperatura;
    var cuentaProductos;
    var temperaturaPar;
    var temperaturaMenosDeCero;
    var promedioPesoProductos;
    var pesoMaximo;
    var pesoMinimo;
    var respuesta;
    var banderaDelPrimero;
    var sumaPesoProductos;
    var marcaMaxima;

    marcaDelProducto       = '';
    pesoDelProducto        = 0;
    temperaturaAlmacenaje  = 0;
    cuentaTemperatura      = 0;
    cuentaProductos        = 0;
    temperaturaPar         = 0;
    temperaturaMenosDeCero = 0;
    promedioPesoProductos  = 0;
    pesoMaximo             = 0;
    pesoMinimo             = 0;
    respuesta              = "si";
    banderaDelPrimero      = 0;
    sumaPesoProductos      = 0;
    marcaMaxima            = 0;

    while(respuesta == "si")
	{
        // Peso de productos.
        marcaDelProducto = prompt("Ingrese la marca:");
        pesoDelProducto  = prompt("Ingrese el peso del producto:");
        pesoDelProducto  = parseInt(pesoDelProducto);

        while(isNaN(pesoDelProducto) == true || pesoDelProducto < 1 || pesoDelProducto > 100)
        {
            pesoDelProducto   = alert("ERROR, debe ingresar un peso entre 1 y 100.");
            pesoDelProducto   = prompt("Ingrese el peso del producto:");
            pesoDelProducto   = parseInt(pesoDelProducto);
        }

        sumaPesoProductos = pesoDelProducto + sumaPesoProductos;
        cuentaProductos ++;

		if(banderaDelPrimero == 0)
		{
            pesoMaximo        = pesoDelProducto;
            pesoMinimo        = pesoDelProducto;    
            marcaMaxima       = marcaDelProducto;
			banderaDelPrimero = 1; 
		}
		else
		{
            // La marca del producto más pesado.
            // El peso máximo y el mínimo.
			if(pesoDelProducto > pesoMaximo)
			{
				marcaMaxima = marcaDelProducto;
                pesoMaximo  = pesoDelProducto;
			}
            if(pesoDelProducto < pesoMinimo)
            {
                pesoMinimo = pesoDelProducto;
            }
		}

        // Temperaturas.
        temperaturaAlmacenaje = prompt("Ingrese la temperatura de almacenamiento:");
        temperaturaAlmacenaje = parseInt(temperaturaAlmacenaje);
        while(isNaN(temperaturaAlmacenaje) == true || temperaturaAlmacenaje < -30 || temperaturaAlmacenaje > 30)
        {
            temperaturaAlmacenaje = alert("ERROR, debe ingresar una temperatura entre -30 y 30 grados.");
            temperaturaAlmacenaje = prompt("Ingrese la temperatura de almacenamiento:");
            temperaturaAlmacenaje = parseInt(temperaturaAlmacenaje);
        }
            // La cantidad de temperaturas pares.
            if(temperaturaAlmacenaje %2 == 0)
            {
                cuentaTemperatura ++;
            }
            // La cantidad de productos que se conservan a menos de 0 grados.
            if(temperaturaAlmacenaje < 0)
            {
                temperaturaMenosDeCero ++;
            }

        respuesta=prompt("Ingrese si para continuar ingresando productos.");
    }
    
    // El promedio del peso de todos los productos.
    promedioPesoProductos = sumaPesoProductos / cuentaProductos;
    promedioPesoProductos = parseFloat(promedioPesoProductos);

    document.write("La cantidad de temperaturas pares es: " + cuentaTemperatura + "</br>");
    document.write("La marca del producto mas pesado es: " + marcaMaxima + "</br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados es: " + temperaturaMenosDeCero + "</br>");
    document.write("El promedio del peso de todos los productos es: " + promedioPesoProductos + "</br>");
    document.write("El peso maximo es: " + pesoMaximo + " y el minimo: " + pesoMinimo);
} // fin de la funcion

/*Testeo con los siguientes valores
(m=pepito;  p = 50;                 t =-300(mal) ,-30(bien))
(m=teem;    p = 10;                 t =0 )
(m=llut;    p = 150(mal), 15(bien); t =-13 )
(m=fpy;     p = 45;                 t =-12 )*/
