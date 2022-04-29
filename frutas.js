"use strict";

const fruits = [
  "naranja",
  "pera",
  "manzana",
  "pera",
  "sandia",
  "naranja",
  "manzana",
  "melocoton",
];

const fruitsCount = {};

for (const fruta of fruits) {
  if (fruta in fruitsCount) {
    fruitsCount[fruta] += 1;
  } else {
    fruitsCount[fruta] = 1;
  }
}

console.log(fruitsCount);
