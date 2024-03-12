//ESTRUCTURAS DE CONTROL
//CONDICIONALES

//Simple
//if

// let billetera = 2;

// //Sintaxis
// if (billetera) {
//   console.log("Tienes dinero!");
// }

//Doble
//if - else

let billetera = "0";

if (billetera > 0) {
  console.log("Tienes dinero!");
} else {
  console.log("No hay dinero disponible!");
}

//Ej asistencia - booleano
let asistencia = false;

if (asistencia == true) {
  console.log("Presente!");
} else {
  console.log("Ausente!");
}

//ANIDADAS
//Ej: tarjeta del bondi - CIUDADANA
let ciudadana = 20;

//situaciones -1 0 +1

if (ciudadana < 0) {
  console.error(`${ciudadana}. Su saldo es negativo! 😅`);
} else {
  if (ciudadana == 0) {
    console.warn("No posee saldo! Realice una recarga! 😂");
  } else {
    console.log(`${ciudadana}. Saldo disponible! 😁`);
  }
}

// //Ejercicio = NUMERO PAR--------------------------------------

// let numero = parseInt(prompt("Ingrese un numero"));
// console.log(numero);

// //NaN - Not a Number

// //isNaN = true or false

// if (isNaN(numero)) {
//   console.log("El valor ingresado no es un numero!");
// } else {
//   if (numero % 2 == 0) {
//     console.log(`El numero ${numero} es par!`);
//   } else {
//     console.log(`El numero ${numero} es impar!`);
//   }
// }

//---------------------------------------------------------
//---------------------------------------------------------
//SWITCH

//Sintaxis
/*
switch (key) {
  case value:
    break;

  case value:
    //respuesta
    break;

  case value:
    break;

  case value:
    break;

  default:
    break;
}
*/

let edad = 14;

switch (edad) {
  case 16:
    console.log("Corresponde a Aula A");
    break;

  case 17:
    console.log("Corresponde a Aula B");
    break;

  case 18:
    console.log("Corresponde a Aula C");
    break;

  default:
    console.log("No puede ingresar!");
    break;
}

//---------------------------------------------------------
//EJERCICIOS
//Ejercicio FIESTA
//Solo pueden ingresar personas de 18 o mayores
//Acompañadas por un tutor

// //Solucion de NACHO
// const tutor = false;
// const persona = 15;

// //if (persona >=18 || tutor)
// if (persona >= 18 || (persona < 18 && tutor)) {
//   console.log("INGRESA A LA FIESTA!!!!!!!!!!");
// } else console.log("no ingresa");

// //Solucion de EXEQUIEL
// let edad1 = parseInt(prompt(`ingrese edad`));

// if (isNaN(edad1)) {
//   console.error(`el valor ingresado no es un numero, intente de nuevo`);
// } else if (edad1 >= 18) {
//   console.log(`puede ingresar solo a la fiesta`);
// } else {
//   console.log(`no puede ingresar a la fiesta, a menos que tenga un tutor`);
// }

//Ejercicio verduleria - SWITCH
//Pedir verdura (ingresa una verdura)
//Informar si esta DISPONIBLE la mercaderia

//Solucion de ESTEBAN
let verdura = prompt("ingrese una verdura").toLowerCase();
console.log(verdura);

// switch (verdura) {
//   case "tomate":
//     console.log("se encuentra disponible");
//     break;
//   case "lechuga":
//     console.log("se encuentra disponible");
//     break;
//   case "cebolla":
//     console.log("se encuentra disponible");
//     break;
//   default:
//     console.log("no esta  disponible");
//     break;
// }

switch (verdura) {
  case "tomate":
  case "lechuga":
  case "cebolla":
    console.log("se encuentra disponible");
    break;
  default:
    console.log("no esta  disponible");
    break;
}
