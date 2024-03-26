//! CRUD - basico

/*

Create

Read

Update

Delete

*/

//! ARRAY - ""BASE DE DATOS"" ----------------------
const lista = [
  "PAN",
  "MERMELADA",
  "QUESO",
  "AZUCAR",
  "MAYONESA",
  "FIDEOS",
  "POLENTA",
  "CHOCOLATE",
];
console.log(lista);
//--------------------------------------------------

//? Funcion para crear un producto/usuario - CREATE
const agregarProducto = () => {
  let producto = prompt("Ingrese un producto nuevo:");
  console.log(producto);
  while (producto) {
    lista.push(producto.toUpperCase());
    alert(`El producto ${producto} se guardo correctamente!`);
    producto = prompt("Ingrese un producto nuevo:");
  }
  alert("Finalizo el proceso!!");
};

//? Funcion para LISTAR todo el array - READ
const listarProductos = () => {
  //limpiar el documento
  document.body.innerHTML = "";

  //titulo
  document.write("<h2>Lista de productos disponibles:</h2>");

  if (lista.length > 0) {
    document.write("<ol>");
    //iterar - recorrer
    lista.forEach((producto) => {
      document.write("<li>");
      document.write(producto);
      document.write("</li>");
    });
    document.write("</ol>");
  } else {
    document.write("No hay productos en la lista!");
  }
};

//SCOPE GLOBAL
listarProductos();

//? Funcion para leer o llamar a UN SOLO PRODUCTO

//? Funcion para MODIFICAR - UPDATE
const modificarProducto = () => {
  let producto = prompt("Ingrese el producto a modificar:");
  if (producto) {
    let indice = lista.indexOf(producto.toUpperCase());
    if (indice > -1) {
      let nuevoProducto = prompt("Ingrese el nuevo nombre:");
      if (nuevoProducto) {
        lista.splice(indice, 1, nuevoProducto.toLocaleUpperCase());
        alert("El producto se modifico!");
      }
    } else {
      alert("No se encontro el producto!");
    }
  } else {
    alert("Se cancela la operacion");
  }

  listarProductos();
};

//? Funcion para BORRAR - DELETE
const borrarProducto = () => {
  //formulario de busqueda - Ej ingreso Pan
  let producto = prompt("Ingrese el producto a eliminar:");

  if (producto) {
    let indice = lista.indexOf(producto.toUpperCase());
    //PAN = tiene la posicion 0
    //cuando no encuentra el elemento = -1

    if (indice > -1) {
      let confimarEliminacion = confirm(
        `Esta seguro que desea eliminiar ${lista[indice]}?`
      );
      if (confimarEliminacion) {
        lista.splice(indice, 1);
        alert("El producto se elimino!");
      }
    } else {
      alert("No se encontro el producto!");
    }
  } else {
    alert("Se cancela la operacion");
  }

  listarProductos();
};
