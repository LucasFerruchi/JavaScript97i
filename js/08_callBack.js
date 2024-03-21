//! CALLBACKS

/*Funciones ANIDADAS dentro de los parametros de
OTRAS FUNCIONES O METODOS */

const numeros = [95, 46, 2, 69, 17, 63, 612, 4, 874];
console.log(numeros);

// let numerosOrdenados = numeros.sort();
// console.log(numerosOrdenados);

// let numerosOrdenados = numeros.sort(function (a, b) {
//   return a - b;
// });
// console.log(numerosOrdenados);

let numerosOrdenados = numeros.sort((a, b) => a - b);
console.log(numerosOrdenados);

//FILTER
let pares = numeros.filter((numero) => {
  return numero % 2 === 0;
  //   return numero <= 90;
});
console.log(pares);

//FIND
let busquedaNumero = numeros.find((numero) => {
  return numero <= 90;
});
console.log(busquedaNumero);

//------------------------------------------------------
let alumnos = ["Sofia", "Raul", "Marcos", "Camila", "Eliana", "Susana"];
console.log(alumnos);

let busqueda = alumnos.find((alumno) => {
  return alumno === "Raul";
});

console.log(busqueda);

//FINDINDEX
let indice = alumnos.findIndex((alumno) => {
  return alumno === "Raul";
});

console.log(indice);

//Recorrer el arreglo - iterar

//? FOR
/*

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

//FOREACH
let alumnos1 = ["Sofia", "Raul", "Marcos", "Camila", "Eliana", "Susana"];
console.log(alumnos);

alumnos1.forEach((alumno) => {
  let nombre = alumno.toUpperCase();
  console.log(`Hola soy ${nombre}`);
});

//MAP
const numeros1 = [95, 46, 2, 69, 17, 63, 612, 4, 874];
console.log(numeros1);

let numero = numeros1.map((numero) => {
  return numero * 2;
});

console.log(numero);
