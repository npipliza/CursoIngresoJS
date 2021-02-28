/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    
    precioUno  = document.getElementById('txtIdPrecioUno').value;
    precioUno  = parseInt(precioUno);
    precioDos  = document.getElementById('txtIdPrecioDos').value;
    precioDos  = parseInt(precioDos);
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);

    resultado  = precioUno + precioDos + precioTres;
   
    alert("La suma es: " + resultado);
}

function Promedio () 
{
        var precioUno;
        var precioDos;
        var precioTres;
        
        precioUno  = document.getElementById('txtIdPrecioUno').value;
        precioUno  = parseInt(precioUno);
        
        precioDos  = document.getElementById('txtIdPrecioDos').value;
        precioDos  = parseInt(precioDos);

        precioTres = document.getElementById('txtIdPrecioTres').value;
        precioTres = parseInt(precioTres);
            
        promedio   = (precioUno+precioDos+precioTres)/3;
       
        alert("El promedio es: " + promedio);
    
}

function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var iva;
    var precioConIva;
    
    precioUno  = document.getElementById('txtIdPrecioUno').value;
    precioUno  = parseInt(precioUno);
    
    precioDos  = document.getElementById('txtIdPrecioDos').value;
    precioDos  = parseInt(precioDos);
    
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);

    resultado  = precioUno + precioDos + precioTres;
    iva        = resultado * 21 /100;

    precioConIva = resultado + iva;
   
    alert("El precio con IVA es: " + precioConIva);

}
