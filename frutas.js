"use strict";

// const fruits = [
//   "naranja",
//   "pera",
//   "manzana",
//   "pera",
//   "sandia",
//   "naranja",
//   "manzana",
//   "melocoton",
// ];

// const fruitsCount = {};

// for (const fruta of fruits) {
//   if (fruta in fruitsCount) {
//     fruitsCount[fruta] += 1;
//   } else {
//     fruitsCount[fruta] = 1;
//   }
// }

// console.log(fruitsCount);

//quiero una funcion "countFruits". Recibira por parametro, un array de frutas, y nos retornara el objeto con las frutas contadas. Luego, llamar a la funcion varias veces con arrays de frutas diferentes, y sacar por consola los objetos retornados.

function countFruits(fruits) {
  const fruitsCount = {};

  for (const fruta of fruits) {
    if (fruta in fruitsCount) {
      fruitsCount[fruta] += 1;
    } else {
      fruitsCount[fruta] = 1;
    }
  }

  return fruitsCount;
}

console.log(
  countFruits([
    "manzana",
    "peras",
    "naranjas",
    "uvas",
    "platano",
    "uvas",
    "manzana",
  ])
);
