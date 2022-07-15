files = ['p', 'p', 'o', 't']


function comparar (elemento,files){
    console.log(elemento)
    console.log(files)

    files.forEach(function(file) {
    const i =1
    // console.log(file)
    // const ech = JSON.stringify(file)
    if (JSON.stringify(elemento) === JSON.stringify(file)) { 
            // console.log("encontre un elemento duplicado")
            // no se pudo comparar porque los formatos son diferentes
            console.log("entre a if ==")
            const temp = [] 
            temp.push(elemento,file+i)
            return temp
        } 
    
    if (JSON.stringify(elemento) != JSON.stringify(file)) { 
        console.log("entre a if !=")
        console.log(elemento)
        console.log(file)
        
            const temp = []
            temp.push(elemento,file)
            return temp
        }
    //console.log(`${index} : ${comida}`)
    })

}

function order (files){

    const cantidad = files.length
    console.log(cantidad)
    const arregloFinal = []
    for (i = 1; i< cantidad; i++) {
        const elemento = files.slice(0,i)
        // console.log(elemento)
        return comparar(elemento,files)
        // const comparacion = JSON.stringify(elemento) == JSON.stringify(elemento2)
        // console.log(comparacion)
    }
    // console.log(temp)
    // const primerosDosElementos = arreglo.slice(0,1);
    // console.log("El arreglo original es: ");
    // console.log(arreglo);
    // console.log("El arreglo cortado es: ");
    // console.log(primerosDosElementos);

}
/*
function order2 (elemento,files){
    for (j = 1; j<cantidad;j++)

        const elemento2= files.slice(1,j)
        console.log(elemento2)
}
*/
const final = order (files)
console.log(final)