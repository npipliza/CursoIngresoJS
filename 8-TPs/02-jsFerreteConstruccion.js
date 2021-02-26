/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las 
    medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var radioTerreno;
    var resultado;
    var cantidadAlambre;

    largoTerreno = document.getElementById('txtIdLargo').value;
    largoTerreno = parseInt(largoTerreno);
    
    anchoTerreno = document.getElementById('txtIdAncho').value;
    anchoTerreno = parseInt(anchoTerreno);

    radioTerreno = document.getElementById('txtIdRadio').value;
    radioTerreno = parseInt(radioTerreno);

    radioTerreno    = largoTerreno + anchoTerreno;
    resultado       = radioTerreno * 2;
    cantidadAlambre = resultado * 3;
//   cantidadAlambre = parseInt(cantidadAlambre);
    

    alert("Precisa comprar " + cantidadAlambre + " metros de alambre." );
}

function Circulo () 
{
    var radioTerreno;
    var cantidadAlambre;
    var resultado;

    radioTerreno = document.getElementById('txtIdRadio').value;
    radioTerreno = parseInt(radioTerreno);

    resultado       = radioTerreno;
    cantidadAlambre = resultado * 3;
 //   cantidadAlambre = parseInt(cantidadAlambre);

    alert("Precisa comprar " + cantidadAlambre + " metros de alambre." );

}

function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var cantidadBolsasCemento;
    var cantidadBolsasCal;

    largoTerreno = document.getElementById('txtIdLargo').value;
    largoTerreno = parseInt(largoTerreno);
    
    anchoTerreno = document.getElementById('txtIdAncho').value;
    anchoTerreno = parseInt(anchoTerreno);

    cantidadBolsasCemento = (largoTerreno * anchoTerreno) * 2;
    cantidadBolsasCemento = parseInt(cantidadBolsasCemento);

    cantidadBolsasCal = (largoTerreno * anchoTerreno) * 3;
    cantidadBolsasCal = parseInt(cantidadBolsasCal);

    alert("Para hacer un contrapiso de " + largoTerreno + " mts. x " + anchoTerreno + " mts., precisa " + cantidadBolsasCemento + " bolsas de cemento y " + cantidadBolsasCal + " bolsas de cal." );
	
}