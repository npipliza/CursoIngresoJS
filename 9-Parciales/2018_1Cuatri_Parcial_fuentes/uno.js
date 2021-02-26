
function mostrar()
{
 var ancho;
 var largo;
 var rectangulo;

 ancho = prompt("Ingrese el ancho:");
 ancho = parseFloat(ancho);
 largo = prompt("Ingrese el largo:");
 largo = parseFloat(largo);


 // validar los ingresos
 rectangulo = (ancho * largo) * 2;

 alert(rectangulo);
}
