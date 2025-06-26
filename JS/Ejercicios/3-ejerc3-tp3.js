//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const repeticiones = Array(13).fill(0)

for(let tirada = 0; tirada < 50; tirada++){
    const dadoB = Math.floor(Math.random() * 6) + 1 
    const dadoA = Math.floor(Math.random() * 6) + 1 
    const sum = dadoA + dadoB

    repeticiones[sum]++
}

document.writeln('<table class="table table-bordered table-dotted">')
document.writeln('<tr>')
document.writeln('<th class="text-center">Sumatoria</th>')
document.writeln('<th class="text-center">Repeticiones</th>')
document.writeln('</tr>')

for(sum = 2; sum <= 12; sum++){
    document.writeln('<tr>')
    document.writeln(`<td> ${sum} </td>`)
    document.writeln(`<td> ${repeticiones[sum]} </td>`)
    document.writeln('</tr>')
}

document.writeln('</table>')


