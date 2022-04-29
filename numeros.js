"use strict";

/**crear una funcion a la que se le pase como argumento un array de numeros y que retorne el mayor.
 * EJEMPLO: SI llamamos a getGreatestNum([4, 10, 6, 16, 1]), debe retornar 16
 */

function mayorQue(numeros) {
  let numMay = -Infinity;
  for (const unidad of numeros) {
    if (numMay < unidad) {
      numMay = unidad;
    }
  }

  return numMay;
}

console.log(mayorQue([4, 10, 6, 16, 1]));

// for (let i = 0; i === numeros.length; i++) {
//   console.log(numeros[i]);
// }
