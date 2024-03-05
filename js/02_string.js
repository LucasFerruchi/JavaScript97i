//METODO PROMT

// let nombre = prompt("Ingrese su nombre:");
// console.log(nombre);

let nombre = "lucas";

// let apellido = prompt("Ingrese su apellido:");
// console.log(apellido);

let apellido = "ferruchi";

//Metodos de concatenacion

// let nombreCompleto = nombre + " " + apellido;
// console.log(nombreCompleto);

//Tamplate STRING -------------------------------------

let nombreCompleto = `El nombre del usuario es ${nombre}, ${apellido}`;
console.log(nombreCompleto);

let frase = "Bienvenidos a la clase del dia";
console.log(frase);

//Convertir en mayusculas
//toUpperCase()
console.log(frase.toUpperCase());

//Comvertir en minusculas
//toLowerCase()
console.log(frase.toLocaleLowerCase());

//Contar los caracteres
//length
console.log(frase.length);

//Eliminar caracteres
//.trim
console.log(frase.trim().length);

//Obtener un solo caracter
//.charAt()
console.log(frase.charAt(3));

//Obtener el ultimo caracter con .charAt
console.log(frase.charAt(frase.length - 1));

//Obtener una parte de la cadena de string
//substring()
console.log(frase.substring(7));

console.log(frase.substring(2, 15));

//Obtener un caracter en ESPECIFICO
//.includes()
console.log(frase.includes("n"));

//Ej ARRAY

const mascotas = ["gatos", "perros", "loros"];
console.log(mascotas.includes("perros"));

//.at
console.log(frase.at(-3));

//Separar cadena de caracteres --- CONVIERTE EN ARRAY
//SPLIT
console.log(frase.split("e"));

// let name = prompt("Ingrese su nombre y apellido:");
// console.log(name);
let name = "Lucas Ferruchi";
console.log(name);

//genera un array
let arrayUsuario = name.split(" ");
console.log(arrayUsuario);

//Unir Array
//JOIN

let alumno = arrayUsuario.join(" ");
console.log(alumno);
