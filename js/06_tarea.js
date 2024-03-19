//TAREAS ARRAY

// //Tarea 1
// //Metodo .split()
// /*De una cadena de texto generar un array (split).
// Posteriormente mostrar la siguiente informacion:

//  . a-Numero de palabras
//  . b-Primera palabra
//  . c-Ultima palabra
//  . d-Las palabras colocadas en orden inverso
//  . e-Las palabras mostradas en orden alfabetico
//  . f-Las palabras mostradas de la z a la a
//  Sacar toda esta informacion en consola*/

// let frase = "Hola comision 97i, la mejor de Rolling";
// console.log(frase);

// //Metodo .split(): convierte una cadena string en un array

// let palabras = frase.toLowerCase().split(" ");
// console.log(palabras);

// //a ---------------------------------------------------
// console.log(palabras.length);

// //b ---------------------------------------------------
// console.log(`La primer palabra es "${palabras[0]}"`);
// /*Tambien puedo usar .at */
// console.log(`La primer palabra es "${palabras.at()}"`);
// //c ---------------------------------------------------
// console.log(`La ultima palabra es "${palabras.at(-1)}"`);

// //d ---------------------------------------------------
// console.log(palabras.reverse());

// //e ---------------------------------------------------
// console.log(palabras.sort());

// //f ---------------------------------------------------
// console.log(palabras.sort().reverse());

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// //Tarea 2

// /*Lista de numeros, donde el usuario debera ingresar un numero,
// y le tenemos que decir si adivina o no! */
// //Metodo .includes()

// let lista = [65, 2, 89, 665, 46, 14, 87];

// // let numero = parseInt(prompt("Ingrese un numero:"));
// let numero = Number(prompt("Ingrese un numero:"));
// console.log(numero);

// if (lista.includes(numero)) {
//   console.log("Adivinaste el numero 😁");
// } else {
//   console.log("No adivinaste!!! 😪");
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// //Tarea 3

// /*Declarar un array que llamamos "clasificaciones" con los siguientes valores:
// Ana, Osvaldo, Raul, Celia, maria, Antonio (vamos a suponer que es el orden
//     de clasficacion de un concurso en un momento dado)

//     -imprime la clasificacion actual
//     -el concurso continua, y se van a modificar las posiciones,
//     debemos cambiar en el array:
//         a- Antonio es descalificado y es eliminado
//         b- detras de Ana y antes de Osvaldo se clasfifican
//         dos nuevos concursantes
//         c- Hay una nueva participante que pasa a ser primera
//         d- Imprimer la nueva clasificacion*/

// let calificaciones = ["Ana", "Osvaldo", "Raul", "Celia", "Maria", "Antonio"];
// console.log(calificaciones);

// //a
// calificaciones.pop("");
// console.log(calificaciones);

// //b
// calificaciones.splice(1, 0, "Benjamin", "Rosario");
// console.log(calificaciones);

// //c
// calificaciones.unshift("Micaela");
// console.log(calificaciones);

// calificaciones.splice(0, 0, "Dante");
// console.log(calificaciones);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Tarea 4
//COMO AGREGAR ELEMENTOS A UN ARRAY VACIO

/*Pedir por pantalla nombre de 5 alumnos
 - Guardarlos en un arreglo
 - usando el arreglo mostrar en consola, por cada alumno,
 un mensaje de bienvenida*/

let alumnos = [];
console.log(alumnos);

//Crear el arreglo
for (let i = 0; i < 5; i++) {
  let nombre = prompt("Ingrese el nombre del alumno");
  alumnos.push(nombre);
  console.log(alumnos);
}

//Mostrar el mensaje de bienvenida
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Bienvenido/a, ${alumnos[i]}!`);
}
