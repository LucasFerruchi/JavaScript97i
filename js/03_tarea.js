//Tareas del dia!

/*Tarea 1:
-Obtener un numero aleatorio entre 1 y 100
-Calcular la raíz cuadrada y mostrar en consola
-Elevarlo a la quinta potencia y mostrarlo en consola

tarea 2:
-Crea una lista de numeros cualquiera y mostrar por consola
-El mayor y el menor

tarea 3:
-Dados los siguientes numeros
46.66987
"98.66547"
-dejarlos con dos decimales y mostrarlos en consola*/

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
//tarea 1
let numeroRandom = parseInt(Math.random() * 100);
console.log(numeroRandom);

let raizCuadrada = Math.sqrt(numeroRandom);
console.log(raizCuadrada);

// let base = raizCuadrada;
// let exponente = 5;
// let resultado = Math.pow(base, exponente);
// console.log(resultado);

let potencia = Math.pow(raizCuadrada, 5);
console.log(potencia);

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
//tarea 2
console.log(`El numero menor es: ${Math.min(54, 6, 87, 2, 945)}`);

//!OJO con arreglos y objetos
//SPREAD OPERATOR "..."
const pedro = [2, 35, 87, 45, 987, 65];
console.log(pedro);
console.log(Math.max(pedro));
//!     iterar
console.log(...pedro);
console.log(Math.max(...pedro));

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
//tarea 3
/*
-Dados los siguientes numeros
46.66987
"98.66547"
*/

// let num = 46.66987;

// let num1 = "98.66547";

// let numero1 = num.toFixed(2);
// console.log(parseFloat.(numero1));

// let numero2 = parseFloat(num1).toFixed(2);
// console.log(numero2);
