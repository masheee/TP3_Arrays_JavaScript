//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)

//Ejemplo:

//Input:
//lado A = 24
//lado B = 5                        Output: 58

function perimetroRect(ladoA, ladoB) {
  let perimetro = 2 * (ladoA + ladoB)
  return perimetro
}

let lado1 = prompt("Ingrese el valor del primer lado (A) del rectangulo: ")
let lado2 = prompt("Ingrese el valor del segundo lado (B) del rectangulo: ")

lado1 = parseFloat(lado1)
lado2 = parseFloat(lado2)

if (isNaN(lado1) || isNaN(lado2)) {
  document.writeln("Ingrese valores validos para los lados")
} else if (lado1 < 0 || lado2 < 0) {
    document.writeln("Los lados del rectangulo no pueden ser numeros negativos")
}else{
  let perimetroCalc = perimetroRect(lado1, lado2);

  document.writeln(`Input:`)
  document.writeln('<br>')
  document.writeln(`Lado A = ${lado1}`)
  document.writeln('<br>')
  document.writeln(`Lado B = ${lado2}`)
  document.writeln('<br>')
  document.writeln(`Output: ${perimetroCalc}`)
}