/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */ 
//if (cantidad) con Switch adentro (marca)
function CalcularPrecio () 
{
    var precio;
    var marca;
    var cantidad;
    var porcentajeDescuento;
    var precioConDescuento;
    var descuento;
    var calcula;
    var calculaIIBB;

    precio              = 35;
    porcentajeDescuento = 0;
    marca               = document.getElementById('Marca').value;
    cantidad            = document.getElementById('txtIdCantidad').value;
    cantidad            = parseInt(cantidad);

    if(cantidad == 3)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
                porcentajeDescuento = 15;
            break;

            case "FelipeLamparas":
                porcentajeDescuento = 10;
            break;

            default:
                porcentajeDescuento = 5;
            break;
        }
    }

    if(cantidad == 4)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                porcentajeDescuento = 25;
            break;

            default:
                porcentajeDescuento = 20;
            break;
        }
    }

    if(cantidad == 5)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
                porcentajeDescuento = 40;
            break;

            default:
                porcentajeDescuento = 30;
            break;
        }
    }

    if(cantidad > 5)
    {
        porcentajeDescuento = 50;
    }

    calcula            = cantidad * precio;
    descuento          = calcula * porcentajeDescuento /100;
    precioConDescuento =  calcula - descuento;
    precioConDescuento = parseFloat(precioConDescuento);

    if(precioConDescuento > 120)
    {
        calculaIIBB        = precioConDescuento * 10 / 100;
        precioConDescuento = precioConDescuento + calculaIIBB;
        precioConDescuento = parseFloat(precioConDescuento);
        alert("Usted pago: $ " + calculaIIBB + " de IIBB.");
    }

    document.getElementById('txtIdprecioDescuento').value = precioConDescuento;
    
}

 /*
 //Switch(cantidad) con if(marca) adentro
function CalcularPrecio () 
{
    var precio;
    var marca;
    var cantidad;
    var porcentajeDescuento;
    var precioConDescuento;
    var descuento;
    var calcula;
    var calculaIIBB;

    precio    = 35;
    marca     = document.getElementById('Marca').value;
    cantidad  = document.getElementById('txtIdCantidad').value;
    cantidad  = parseInt(cantidad);

    switch(cantidad)
    {
        case 1:
        case 2:
            porcentajeDescuento = 0;
            break;

        case 3:
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 15;
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    porcentajeDescuento = 10;
                }
                else
                {
                    porcentajeDescuento = 5;
                } 
            }
        break;

        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentajeDescuento = 25;
            }
            else
            {
                porcentajeDescuento = 20;
            }
        break;

        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 40;
            }
            else
            {
                porcentajeDescuento = 30;
            }
        break;

        default:
        porcentajeDescuento = 50;
        break;    

    }

    calcula            = cantidad * precio;
    descuento          = calcula * porcentajeDescuento /100;
    precioConDescuento =  calcula - descuento;
    precioConDescuento = parseFloat(precioConDescuento);

    if(precioConDescuento > 120)
    {
        calculaIIBB        = precioConDescuento * 10 / 100;
        precioConDescuento = precioConDescuento + calculaIIBB;
        precioConDescuento = parseFloat(precioConDescuento);
        alert("Usted pago: $ " + calculaIIBB + " de IIBB.");
    }

    document.getElementById('txtIdprecioDescuento').value = precioConDescuento;
    
}
*/

/*
//TODO CON SWITCH
function CalcularPrecio () 
{
    var precio;
    var marca;
    var cantidad;
    var porcentajeDescuento;
    var precioConDescuento;
    var descuento;
    var calcula;
    var calculaIIBB;

    precio    = 35;
    marca     = document.getElementById('Marca').value;
    cantidad  = document.getElementById('txtIdCantidad').value;
    cantidad  = parseInt(cantidad);

    switch(cantidad)
    {
        case 1:
        case 2:
            porcentajeDescuento = 0;
            break;

        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                porcentajeDescuento = 15;
                break;

                case "FelipeLamparas":
                porcentajeDescuento = 10;
                break;

                default:
                porcentajeDescuento = 5;
                break;    
            }

        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                porcentajeDescuento = 25;
                break;

                default:
                porcentajeDescuento = 20;
                break;    
            }

        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                porcentajeDescuento = 40;
                break;

                default:
                porcentajeDescuento = 30;
                break;    
            }
            
        default:
        porcentajeDescuento = 50;
        break;    
    }

    calcula            = cantidad * precio;
    descuento          = calcula * porcentajeDescuento /100;
    precioConDescuento =  calcula - descuento;
    precioConDescuento = parseFloat(precioConDescuento);

    if(precioConDescuento > 120)
    {
        calculaIIBB        = precioConDescuento * 10 / 100;
        precioConDescuento = precioConDescuento + calculaIIBB;
        precioConDescuento = parseFloat(precioConDescuento);
        alert("Usted pago: $ " + calculaIIBB + " de IIBB.");
    }

    document.getElementById('txtIdprecioDescuento').value = precioConDescuento;

}*/

 /* //TODO CON IF
function CalcularPrecio () 
{
    var precio;
    var marca;
    var cantidad;
    var porcentajeDescuento;
    var precioConDescuento;

    precio    = 35;
    precio    = parseInt(precio);
    marca     = document.getElementById('Marca').value;
    cantidad  = document.getElementById('txtIdCantidad').value;
    cantidad  = parseInt(cantidad);

    if(cantidad > 5)
    {
        porcentajeDescuento = 50;
        porcentajeDescuento = parseInt(porcentajeDescuento);
    }
    else
    {
        if(cantidad == 5) 
        {
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 40;  
                porcentajeDescuento = parseInt(porcentajeDescuento);
            }
        }
        else
        {
            porcentajeDescuento = 30;     
            porcentajeDescuento = parseInt(porcentajeDescuento);
        
    
            if(cantidad == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentajeDescuento = 25;  
                    porcentajeDescuento = parseInt(porcentajeDescuento);
                }
            }
            else
            {
                porcentajeDescuento = 20;     
                porcentajeDescuento = parseInt(porcentajeDescuento);
            }
            else
            {
                if(cantidad == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentajeDescuento = 15;  
                        porcentajeDescuento = parseInt(porcentajeDescuento);
                    }
                }

            }
        }
    }

    precioConDescuento = cantidad * precio * porcentajeDescuento / 100;
    precioConDescuento = parseInt(precioConDescuento);

    console.log(porcentajeDescuento);
    document.getElementById('txtIdprecioDescuento').value = precioConDescuento;

}*/
