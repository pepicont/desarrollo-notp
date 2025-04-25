/*EJERCICIO 1
let miArray = [1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<miArray.length;i++){
  console.log(miArray[9-i]);
}*/

/*EJERCICIO 2
const funcEj2 = (arrayPalabras, cadenaString) => {
    let cont = 0;
   
    // Recorrer el array con forEach
    arrayPalabras.forEach(element => {
        if (element.includes(cadenaString)) {
            cont++;
        }
    });
   
    // Imprimir el resultado
    console.log(`La palabra "${cadenaString}" se encuentra ${cont} veces.`);
}

const palabras = [`hola`, `holanda`, `ada`,`holagavria`];
funcEj2(palabras, `hola`);  // Salida: La palabra "hola" se encuentra 2 veces.
*/