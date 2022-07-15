var coins=Array(50, 20, 10, 5, 2, 1)
var cambio=Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
importe= 200
/*
function Vuelto (coins){
 
    var vuelto = coins
    var contador1 = 0
    // (console).log(vuelto)
    
    for (i = 1; 9< vuelto; i++ ) {

        if (vuelto >= 50){
        
            vuelto = coins - coins6  
            
            contador1 +=1
          } 
          
      
          if (vuelto >= 20 && vuelto < 49){
              vuelto = coins -coins6  
              var contador2 = 0
               contador2 +1
            } 
      
            if (vuelto >= 10 && vuelto < 19){
              vuelto = coins -coins6  
              var contador3 = 0
                contador3 +1
            } 
      
            if (vuelto >= 5 && vuelto < 9){
              vuelto = coins -coins6  
              var contador4 = 0
              contador4 +1
            } 
      
            if (vuelto >= 2 && vuelto < 4){
              vuelto = coins -coins6  
              var contador5 = 0
               contador5 +1
            } 
      
            if (vuelto = 1){
              vuelto = coins -coins6  
              var contador6 = 0
                contador6 +1
            }

            console.log(contador1)
        console.log(contador1)
    }
      
      //function imprimir (contador1, contador2, contador3, contador4, contador5, contador6){
        
        
     // }


}
*/

for(var i=0; i<coins.length; i++)
{
 
    // Si el importe actual, es superior a la moneda
    if(importe>=coins[i])
    {
 
        // obtenemos cantidad de monedas
        cambio[i]=parseInt(importe/coins[i]);
 
        // actualizamos el valor del importe que nos queda por didivir
        importe=(importe-(cambio[i]*coins[i])).toFixed(2);
    }
}
for(i=0; i<coins.length; i++)
{
    if(cambio[i]>0)
    {
        if(coins[i]>=5)
            console.log(cambio[i]+"monedas de "+coins[i])
    }
}

