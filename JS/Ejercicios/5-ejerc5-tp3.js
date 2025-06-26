//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function listarCadena(cadena) {
  if (cadena === "") {
    document.writeln(`La cadena esta vacia`);
    return; 
  }

  const cadenaMayus = cadena.toUpperCase();
  const cadenaMinus = cadena.toLowerCase();

  if (cadena === cadenaMayus) {
    document.writeln(`La cadena '${cadena}' esta formada SOLO por mayusculas`);
    document.writeln('<br>')
  } else if (cadena === cadenaMinus) {
    document.writeln(`La cadena '${cadena}' esta formada SOLO por minusculas.`);
    document.writeln('<br>')
  } else {
    document.writeln(`La cadena '${cadena}' esta formada por una MEZCLA de mayusculas y minusculas`);
    document.writeln('<br>')
  }
}

listarCadena("HOLA MUNDO");
listarCadena("hola mundo");
listarCadena("Hola Mundo");
listarCadena("hOLA mUNDO");
listarCadena("13579");
listarCadena("ABC123xyz");
listarCadena("");
