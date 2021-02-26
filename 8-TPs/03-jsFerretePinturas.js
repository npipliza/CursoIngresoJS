/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFahrenheit;
    var temperaturaCentigrados;

    temperaturaFahrenheit = document.getElementById('txtIdTemperatura').value;
    temperaturaFahrenheit = parseInt(temperaturaFahrenheit);

    temperaturaCentigrados = (temperaturaFahrenheit - 32) * 5/9;

    alert(temperaturaFahrenheit + " fahrenheit son " + temperaturaCentigrados + " centigrados." );
}

function CentigradosFahrenheit () 
{
    var temperaturaFahrenheit;
    var temperaturaCentigrados;

    temperaturaCentigrados = document.getElementById('txtIdTemperatura').value;
    temperaturaCentigrados = parseInt(temperaturaCentigrados);

    temperaturaFahrenheit = (temperaturaCentigrados * 9/5) + 32;

    alert(temperaturaCentigrados + " centigrados son " + temperaturaFahrenheit + " fahrenheit." );

}
