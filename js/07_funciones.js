//? FUNCIONES

//TIPOS

//DECLARATIVAS

/*
Sintaxis

function nombre (){
    #accion
}

*/

let nombre = "Lucas";
let apellido = "Ferruchi";

function persona(parametro1, parametro2) {
  console.log(`Hola ${parametro1} ${parametro2}`);
}

persona(nombre, apellido);

//------------------------------------------------------------
//Ej SUMA

let valorA = 54;
let valorB = 17;

function suma(valor1, valor2) {
  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Algun valor no es un numero");
  } else {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
  }
}

suma(valorA, valorB);

//------------------------------------------------------------
//------------------------------------------------------------
//ANONIMAS

/*

const nombre = function (){
    #accion
}

*/

const saludar = function (nombre) {
  console.log(`Hola ${nombre}`);
};

saludar("Josefina");

//------------------------------------------------------------
//------------------------------------------------------------
//SCOPE
//global y local

//GLOBAL
let persona3 = "juan";

const alumno = function () {
  //LOCAL
  let persona3 = "Carla";
  return `Bienvenido/a ${persona3}`;
  //RETURN - detiene el codigo de la funcion!
};

console.log(alumno());

//------------------------------------------------------------
//? EJERCICIOS

//Ej Funcion declarativa para calcular descuento

function calcularDescuento(precio, descuento = 10) {
  //!MARTIN
  // let montoConDescuento = precio * 0.8;
  // console.log(`El importe a abonar es ${montoConDescuento}`);

  //!DANIEL
  let montoConDecuento = precio * (1 - descuento / 100);
  console.log(montoConDecuento);
}

calcularDescuento(10000, 30);

//Ej Funcion anonima - calcular el cubo

const cubo = function (num) {
  return Math.pow(num, 3);
};

console.log(cubo(5));

//!ARROW FUNCTION - Funcion en flecha
const cuboArrow = (num) => {
  return Math.pow(num, 3);
};

console.log(cuboArrow(5));

//!Arrow function en una linea
const cuboArrow1 = (num) => Math.pow(num, 3);

console.log(cuboArrow1(5));

//Ej ARROW calculadora (+ - * /)

const calculadora = (valor1, operacion, valor2) => {
  if (isNaN(valor1) || isNaN(valor2)) {
    return "El valor no es un numero!";
  } else {
    switch (operacion) {
      case "+":
      case "suma":
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2} `);
        break;

      case "-":
      case "resta":
        console.log(`${valor1} - ${valor2} = ${valor1 - valor2} `);
        break;

      case "*":
      case "multiplicacion":
        console.log(`${valor1} * ${valor2} = ${valor1 * valor2} `);
        break;

      case "/":
      case "division":
        console.log(`${valor1} / ${valor2} = ${valor1 / valor2} `);
        break;

      default:
        console.log("La operacion solicitada no es valida!");
        break;
    }
  }
};

console.log(calculadora(25, "+", 5));
