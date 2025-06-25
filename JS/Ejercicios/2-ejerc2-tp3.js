//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

//Mostrar la longitud del arreglo.
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
//Añade en última posición la ciudad de París.
//Escribe por pantalla el elemento que ocupa la segunda posición.
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const ciudades = []

let ciudad = prompt('Ingrese nombre de ciudades:')

while (ciudad !== null) {
  ciudades.push(ciudad)
  ciudad = prompt('Ingrese nombre de ciudades:')
}

ciudades[1] = 'Barcelona'

ciudades.push('París')

document.writeln(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`)

document.writeln('<ul>')
document.writeln(`<li>Elemento 1er posicion: ${ciudades[0]}</li>`)
document.writeln(`<li>Elemento 3er posicion: ${ciudades[2]}</li>`)
document.writeln(`<li>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li>`)
document.writeln('</ul>')

document.writeln('<h2>Arreglo de ciudades</h2>')
document.writeln('<ul>')
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>Elemento: ${ciudades[i]}</li>`)
}
document.writeln('</ul>')






