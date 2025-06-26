//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function parImpar(num) {
  if (num % 2 === 0) {
    return `El numero ${num} es par`
  } else {
    return `El numero ${num} es impar`
  }
}

let num1 = 10
let result1 = parImpar(num1)
document.writeln(result1)

document.writeln('<br>')

let num2 = 7
let result2 = parImpar(num2)
document.writeln(result2) 

document.writeln('<br>')

let num3 = 0
let result3 = parImpar(num3)
document.writeln(result3)

document.writeln('<br>')

let num4 = -3
let result4 = parImpar(num4)
document.writeln(result4)
