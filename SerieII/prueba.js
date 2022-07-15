var importe=245.10
 
// console.log("<p>El cambio de la cantidad "+importe+"</p>");
 
// indicamos todas las monedas posibles
var monedas=Array(50, 20, 10, 5, 2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01);
 
// creamos un array con la misma cantidad de monedas
// Este array contendra las monedas a devolver
var cambio=Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
 
// Recorremos todas las monedas
for(var i=0; i<monedas.length; i++)
{
 
    // Si el importe actual, es superior a la moneda
    if(importe>=monedas[i])
    {
 
        // obtenemos cantidad de monedas
        cambio[i]=parseInt(importe/monedas[i]);
 
        // actualizamos el valor del importe que nos queda por didivir
        importe=(importe-(cambio[i]*monedas[i])).toFixed(2);
    }
}
 
// Bucle para mostrar el resultado
for(i=0; i<monedas.length; i++)
{
    if(cambio[i]>0)
    {
        if(monedas[i]>=5)
            console.log("Hay: "+cambio[i]+" billetes de: "+monedas[i]+" &euro;<br>");
        else
            console.log("Hay: "+cambio[i]+" monedas de: "+monedas[i]+" &euro;<br>");
    }
}