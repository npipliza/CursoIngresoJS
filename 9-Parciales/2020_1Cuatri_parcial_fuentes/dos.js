/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  var respuesta;
  var tipoProducto;
  var cantidadBolsas;
  var contadorBolsas;
  var precioPorBolsa;
  var descuento;
  var totalaPagar;
  var totalCompra;
  var totalArena;
  var totalCal;
  var totalCemento;
  var descuentoCompra;
  var cuentaArena;
  var cuentaCal;
  var cuentaCemento;
  var productoConMasBolsas;
  var productoMasCaro;
  var sumaArena;
  var sumaCal;
  var sumaCemento;
  var NombreProducto;

  respuesta            = 'si';
  tipoProducto         = '';
  contadorBolsas       = 0;
  precioPorBolsa       = 0;
  descuento            = 0;
  totalaPagar          = 0;
  totalCompra          = 0;
  totalArena           = 0;
  totalCal             = 0;
  totalCemento         = 0;
  descuentoCompra      = 0;
  cuentaArena          = 0;
  cuentaCal            = 0;
  cuentaCemento        = 0;
  productoConMasBolsas = '';
  productoMasCaro      = '';
  sumaArena            = 0;
  sumaCal              = 0;
  sumaCemento          = 0;
  NombreProducto       = '';

  while(respuesta == 'si')
  {
    contadorBolsas = contadorBolsas + 1;
    tipoProducto   = prompt("Ingrese 1 para Arena, 2 para Cal o 3 para Cemento.");
    tipoProducto   = parseInt(tipoProducto);
    while(isNaN(tipoProducto) == true || tipoProducto != 1 && tipoProducto != 2 && tipoProducto != 3)
    {
      tipoProducto = prompt("ERROR. Ingrese 1 para Arena, 2 para Cal o 3 para Cemento.");
      tipoProducto = parseInt(tipoProducto);
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas.");
    cantidadBolsas = parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas) == true || cantidadBolsas < 1)
    {
      cantidadBolsas = prompt("ERROR. Ingrese la cantidad de bolsas.");
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    precioPorBolsa = prompt("Ingrese el precio por bolsa.");
    precioPorBolsa = parseInt(precioPorBolsa);
    while(isNaN(precioPorBolsa) == true || precioPorBolsa < 1)
    {
      precioPorBolsa = prompt("ERROR. Ingrese el precio por bolsa.");
      precioPorBolsa = parseInt(precioPorBolsa);
    }

    switch(tipoProducto)
    {
      case 1:
        cuentaArena ++;
        NombreProducto = 'Arena';
        sumaArena      = cantidadBolsas * precioPorBolsa;
        totalArena     = totalArena + sumaArena;
      break;
  
      case 2:
        cuentaCal ++;
        NombreProducto = 'Cal';
        sumaCal        = cantidadBolsas * precioPorBolsa;
        totalCal       = totalCal + sumaCal;
      break;
  
      case 3:
        cuentaCemento ++;
        NombreProducto = 'Cemento';
        sumaCemento    = cantidadBolsas * precioPorBolsa;
        totalCemento   = totalCemento + sumaCemento;
      break;
    }  
      if(totalArena > totalCal && totalArena > totalCemento)
      {
        productoConMasBolsas = 'Arena';    
        productoMasCaro      = 'Arena';
      }
      else
      {
        if(totalCal > totalArena && totalCal > totalCemento)
        {
          productoConMasBolsas = 'Cal';
          productoMasCaro      = 'Cal';
        }
        else
        {
          if(totalCemento > totalArena && totalCemento > totalCal)
          {  
            productoConMasBolsas = 'Cemento';
            productoMasCaro      = 'Cemento';
          }
        }
    }
  
    if(cantidadBolsas > 9)
    {
    descuento = 15;
    }
    else
    {

      if(cantidadBolsas > 29)
      {
      descuento = 25;
      }
      else
      {
        descuento = 0;
      }
    }

    switch(precioPorBolsa)
    {
      case 1:
        cuentaArena = precioPorBolsa;
      break;

      case 2:
        cuentaCal = precioPorBolsa;
      break;

      case 3:
        cuentaCemento = precioPorBolsa;
      break;
    }   
  
  respuesta = prompt("Ingrese si para continuar cargando productos");

  } // fin while si

  totalCompra     = totalArena + totalCal + totalCemento;
  descuentoCompra = totalCompra * descuento / 100;
  totalaPagar     = totalCompra - descuentoCompra;

  //a) El importe total a pagar , bruto sin descuento
  alert("Importe bruto: " + totalCompra);
  console.log("Importe bruto: " + totalCompra);

  //b) el importe total a pagar con descuento(solo si corresponde)
  if(descuento > 0)
  {
    alert("Importe con descuento: " + totalaPagar);
    console.log("Importe con descuento: " + totalaPagar);
  }

  //d) Informar el tipo con mas cantidad de bolsas.
  alert("Producto ingresado con mayor cantidad: " + productoConMasBolsas);
  console.log("Producto ingresado con mayor cantidad: " + productoConMasBolsas);

  //f) El tipo mas caro
  alert("Producto ingresado de mayor valor: " + productoMasCaro);
  console.log("Producto ingresado de mayor valor: " + productoMasCaro);
} //fin de la funcion