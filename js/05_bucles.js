//BUCLES
//acciones que se repiten

// //while
// /*

// sintaxis

// while(condicion){
//     #accion
// }

// */

// let vecesAsumar = 3; //Iterador
// let totalSuma = 0;

// while (vecesAsumar > 0) {
//   totalSuma += 1;
//   vecesAsumar--; //vecesAsumar = vecesAsumar -1;
//   console.log(
//     `Total de la suma: ${totalSuma} | veces que quedan por sumar ${vecesAsumar}`
//   );
// }

// console.log(`Total: ${totalSuma}`);

// //Tabla de multiplicar
// let tabla = 4;
// /*
// 2x1= 2
// 2x2= 4
// */
// let valor = 1;

// while (valor <= 10) {
//   console.log(`${tabla} x ${valor} = ${tabla * valor}`);
//   valor++;
// }

//-----------------------------------------------------------
// //do while

// /*
//SINTAXIS

// do{

// }while(condicion)

// */

// let vueltas = 3;
// let respuesta = " ";

// do {
//   //accion
//   respuesta = prompt("Ingrese un nombre");
//   console.log(`Bienvenido ${respuesta}!`);
//   vueltas--; //iterador
// } while (vueltas > 0); //condicion

//-----------------------------------------------------------
//for
/*
SINTAXIS 

for (let i =  0; i<10 ; i++){
    #accion
}

*/

// let vueltas = 10;

// for (let i = 0; i < vueltas; i++) {
//   let nombre = prompt("Ingrese el nombre:");
//   console.log(`Bienvenido ${nombre}!`);
// }

// //Tabla usando el ciclo for
// //Solucion de GERO

// let num = parseInt(prompt("ingrese un numero:"));
// for (let i = 1; i <= 10; i++) {
//   //TemplateString
//   console.log(`${num} x ${i} = ${num * i}`);
// }

//-----------------------------------------------------------
//TRIVIA

/*EJERCICIO TIPO TRIVIA, DONDE SE PREGUNTE LA CAPITAL DE UN PAIS,
EL USUARIO TENDRA 3 POSIBILIDADES. SI FALLA PIERDE*/

// //Solucion de EXEQUIEL
// let intentos = 3;
// alert(`Paris es capital de que pais? tenes 3 intentos`);
// for (i = 0; i < 3; i++) {
//   let respuesta = prompt(`${i + 1}º intento`).toLocaleLowerCase();
//   intentos--;
//   if (respuesta == "francia") {
//     alert(`respuesta correcta, felicidades, lo lograste al ${i + 1}º intento!`);
//     break;
//   } else {
//     alert(`Fail, te quedan ${intentos} intentos`);
//   }
// }

// //Solucion de DANIEL
// let intentos = 3;
// alert(`Paris es capital de que pais? tenes 3 intentos`);
// for (i = 0; i < 3; i++) {
//   let respuesta = prompt(`${i + 1}º intento`).toLocaleLowerCase();
//   intentos--;
//   if (respuesta == "francia") {
//     alert(`respuesta correcta, felicidades, lo lograste al ${i + 1}º intento!`);
//     i = intentos + 1;
//   } else {
//     alert(`Fail, te quedan ${intentos} intentos`);
//   }
// }

//Solucion-----------------------------------------------

let respuestaCorrecta = "PARIS";
let acierto = false;
let contador = 3;

while (contador > 0 && acierto == false) {
  let respuestaUsuario = prompt("Cual es la capital de Francia?");
  if (respuestaUsuario.toUpperCase() == respuestaCorrecta) {
    acierto = true;
    console.log(`Excelente! ${respuestaCorrecta} es la capital de Francia! 😎`);
  } else {
    contador--;
    console.log(`Te quedan ${contador} intentos!😅`);
  }
}

if (acierto == false) {
  console.warn("Lo sentimos, acabas de perder! 😪");
}
