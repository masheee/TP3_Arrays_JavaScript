//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario

function mostrarTabla(numero) {
  if (isNaN(numero) || numero === null || numero === "") {
    document.writeln("Ingrese un numero valido para generar la tabla");
    return; 
  }

  numero = parseInt(numero);

  document.writeln(`<h2>Tabla de multiplicar del ${numero}</h2>`);
  document.writeln("<ul>"); 

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.writeln(`<li> ${numero} x ${i} = ${resultado}</li>`);
  }

  document.writeln("</ul>");
}

let numeroUser = prompt("Ingrese un numero para ver la tabla de multiplicar (del 1 al 10):");

mostrarTabla(numeroUser);