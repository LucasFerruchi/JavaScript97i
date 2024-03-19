//! ARRAYS - ARREGLOS

let alumnos = ["Juan", "Sofia", "Marcos", "Camila"];
console.log(alumnos);

console.log(alumnos[2]);

//? .length ---------------------------------------------------
//Si quiero obtener la CANTIDAD de elementos del arreglo

console.log(alumnos.length);

//? ver el ultimo

console.log(alumnos[alumnos.length - 1]);

//? .at OBTENER ALGUN DATO DEL ARREGLO-------------------------

console.log(alumnos.at(2));

//Devolver desde el final del arreglo
console.log(alumnos.at(-2));

//? .join() DEVUELVE TODO EL CONTENIDO DEL ARRAY---------------
//devuelve cadena de string

console.log(`Alumnos de la comision 97i: ${alumnos.join(", ")}`);

//? AGREGAR ELEMENTOS AL ARREGLO ------------------------------

//? .push agregar al final

alumnos.push("Valeria", "Emma");
console.log(alumnos);

//? .unshift agrega al principio

alumnos.unshift("Santiago");
console.log(alumnos);

//? ELIMINAR ELEMENTOS DEL ARREGLO -----------------------------

//? .pop Elimnar el ultimo

alumnos.pop();
console.log(alumnos);

//? .shift Eliminar al principio

alumnos.shift();
console.log(alumnos);

//? ENCONTRAR UN ELEMNTO DEL ARREGLO ---------------------------

//? .includes - Devuelve "true o false"

console.log(alumnos.includes("Sofia"));

//? .indexOf() - Devuelve la "posicion del elemento"
//si no lo encuentra devuelve -1

let pos = alumnos.indexOf("Sofia");
console.log(pos);

//Ej de indexOf() en array de numeros
const array = [10, 20, 30, 40, 50];

const index = array.indexOf(30);
console.log(index); // Devuelve: 2

const index2 = array.indexOf(100);
console.log(index2); // Devuelve: -1

//? ELIMINAR YA SABIENDO LA POSICION DEL ELEMENTO --------------

//? splice()

alumnos.splice(pos, 2); //indico desde q posicion y cuantos (segundo parametro)
console.log(alumnos);

//!!Tambien puedo usar SPLICE para agregar elementos
alumnos.splice(1, 0, "Alexis", "Mariana");
console.log(alumnos);

//!!Tambien puedo usar SPLICE para reemplazar elementos
alumnos.splice(1, 3, "Alfredo", "Silvia", "Fernando");
console.log(alumnos);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//? OTROS METODOS DE ARRAY

let alumnos1 = ["Juan", "Valentina", "Francisco", "Florencia"];
console.log(alumnos1);

let alumnos2 = ["Lucas", "Camila", "Sergio", "Lucia", "Eliana"];
console.log(alumnos2);

//? .concat CONCATENAR (unir) ARREGLOS------------------------------------

let comision = alumnos1.concat(alumnos2);
console.log(comision);

//puede seguir concatenando otros arreglos
let alumnos3 = ["Sebastien", "Humberto", "Miriam", "Hector", "Carolina"];
console.log(alumnos3);

let comision1 = alumnos1.concat(alumnos2, alumnos3);
console.log(comision1);

comision = comision.concat(alumnos3);
console.log(comision);

//? .sort ORDENAR ALFABETICAMENTE ---------------------------------
console.log(alumnos1.sort());
//!OJO VER QUE PASA
console.log(comision.sort());

//? .reverse ORDENAR AL REVES

console.log(comision.reverse());

//? QUE PASA CON ARREGLO DE NUMEROS?

let numbers = [65, 46, 2, 556, 77, 248, 98, 56];

console.log(numbers.sort());

//? CREAR UN "NUEVO" ARRAY, A PARTIR DE COMPONENTES DE OTROS

//.slice()

let nuevoArreglo = comision.slice(4);
console.log(nuevoArreglo);

let nuevoArreglo2 = nuevoArreglo.slice(2, 8); //primer parametro, posicion. Segundo, hasta donde llega
console.log(nuevoArreglo2);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//!IMPORTANTISIMO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ITERAR: recorrer un arreglo

let com97i = ["Juan", "Pedro", "Ana", "Maria", "Humberto", "Miriam"];
console.log(com97i);

for (let i = 0; i < com97i.length; i++) {
  console.log(`Hola soy ${com97i[i]}`);
}
