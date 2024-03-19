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

let persona3 = "juan";

const alumno = function () {
  //local
  let persona3 = "Carla";
  return `Bienvenido/a ${persona3}`;
  //detiene el codigo de la funcion!
};

console.log(alumno());
