//COMENTARIOS

//DE UNA SOLA LINEA
/* VARIAS
LINEAS */

// Como introducimos codigo JavaScript
/*
1-Directo HTML
2-Creando archivo JS
3-Herramientas de desarrollador - Consola
 */

//CONSOLA

console.log("Hola");

console.error("Error");

console.warn("Alerta");

//VARIABLES

//!NO USAR
var nombre = "daniel";
var nombre = "carlos";
console.log(nombre);

let nombre1 = "guada";
//Se puede reasignar su valor
nombre1 = "carlos";
console.log(nombre1);

const nombre2 = "DaniEla cardozo";
// nombre2 = "lucas";
console.log(nombre2);

//OPERADORES
let num1 = 20;
let num2 = 40;

console.log(num1 + num2);

let num3 = num1 + num2;
console.log(num3);

//Operadores unitarios (++ -- !)

--num1;
console.log(num1);

let modoNoche = false;

console.log(!modoNoche);

//Operadores Relacionales
let num4 = 20;

let num5 = 10;
console.log(num4 > num5);

//Operadores logicos (&& ||)

console.log(2 < 3 && 3 > 4);

//ARRAY O ARREGLOS

let caja = [12, 33, 65, 12, 5, 4445];
console.log(caja);

let nombres = ["lucas", "samuel", "guada", "mariano", 34, 76];
console.log(nombres);

//OBJETOS
let usuarioDisney = {
  nombre: "lucas",
  apellido: "ferruchi",
  email: "lucas@lucas@age.com",
  contraseña: "********",
  recordarme: true,
  asistencia: true,
  domicilio: ["Muñecas", 130, "San Miguel de Tucuman"],
};
console.log(alumno);

let rosario = {
  email: "rosario@rosario.com",
  contraseña: "*******",
  recordarme: false,
};

//!-----------------------------------------------------------------
//OJO CON EL +

let name = "Lucas";
let lastName = "Ferruchi";
let age = "39";

// console.log(name + " " + lastName + " " + age);

//Nombre: Lucas Apellido: Ferruchi Edad:39

// console.log("Nombre: " + name + " Apellido: " + lastName + " Edad: " + age);
