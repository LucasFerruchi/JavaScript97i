/*

 1.
 A-INGRESAS UN APELLIDO-OJO -- HACER EL EJERCICIO CON PROMPT
 B-CALACULAR SU CANTIDAD DE CARACTERES, DEBE APARECER: "APELLIDO" TIENE "x" CARACTERES
 C-OBTENER EL ULTIMO CARACTER DEL APELLIDO

 2.
 EN LA SIGUIENTE PALABRA "Daniel"
A-PASARLA A MAYUSCULA
B-PASARLA A MINUSCULA
C-CAPITALIZAS LA PALABRA "Daniel"

 */

//SOLUCIONES

// //1...
// //A
// let apellido = prompt("Ingrese su apellido:");
// console.log(apellido);

// //B
// console.log(`${apellido} tiene ${apellido.length} caracteres`);

// //C
// console.log(`El ultimo caracter de ${apellido}, es ${apellido.at(-1)}`);

//2...
let palabra = "PEDRO";

//A
console.log(palabra.toUpperCase());

//B
console.log(palabra.toLocaleLowerCase());

//C
//Obtener la primer letra
let primeraLetra = palabra.at(0).toUpperCase();
console.log(primeraLetra);

//Obtener el resto de la palabra
let restoPalabra = palabra.substring(1);
console.log(restoPalabra);

//Unir las dos variables
console.log(primeraLetra + restoPalabra);

let palabraCapitalizada = primeraLetra + restoPalabra;
console.log(palabraCapitalizada);

//--------------------------------------------------------------------------
let apellido = "FeRrUchi";
console.log(
  `${apellido.charAt(0).toUpperCase()}${apellido.substring(1).toLowerCase()}`
);

//--------------------------------------------------------------------------
console.log(palabra.at(0).toUpperCase() + palabra.substring(1).toLowerCase());
