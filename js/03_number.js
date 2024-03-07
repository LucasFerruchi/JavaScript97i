//? NUMBERS

// let formulario = prompt("Ingrese un número: ");
// console.log(formulario);

// //parseInt - devuelve numero entero
// let numero = parseInt(formulario);
// console.log(numero);

// //parseFloat -devuelve numero con decimales
// let numeroFloat = parseFloat(formulario);
// console.log(numeroFloat);

//*EN UNA SOLA LINEA ---------------------------------------

// let edad = parseInt(prompt("Ingrese su edad: "));
// console.log(edad);

//* REDONADEAR ----------------------------------------------
//? MATH

// redondea para abajo .floor
console.log(Math.floor(45.9));

// redondea para arriba .ceil
console.log(Math.ceil(45.1));

// redondea para el num entero mas cercano
console.log(Math.round(45.4));

//* MANEJO DE LOS DECIMALES---------------------------------

// let numeroFloat = parseFloat(prompt("Ingrese un numero: "));
// console.log(numeroFloat);

// // DEJA DOS DECIMALES
// console.log(Math.floor(numeroFloat * 100) / 100);

// // .toFixed
// console.log(numeroFloat.toFixed(2)); //! OJO: convierte a STRING

//* MOSTRAR EL NUMERO MAYOR ---------------------------------
console.log(`El numero mayor es: ${Math.max(54, 6, 87, 2, 945)}`);

//* MOSTRAR EL NUMERO MENOR ---------------------------------
console.log(`El numero menor es: ${Math.min(54, 6, 87, 2, 945)}`);

//* Elevar a la potencia
//potencia = base x exponente

let base = 2;
let exponente = 4;
let resultado = base ** exponente;
console.log(resultado);

//.pow
console.log(Math.pow(base, exponente));

//* Calcular la raiz cuadrada---------------------------------
//Math.sqrt

let numero = 22;
let raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada);
console.log(parseFloat(Math.sqrt(numero).toFixed(2)));

//* Numeros randoms ------------------------------------------

console.log(Math.random()); //0 - 1

console.log(Math.random() * 10); //1 - 10

console.log(Math.random() * 100); //100
