// For:
//Ejercicios: 
//5) a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var equipos = ['river', 'central', 'newells', 'estudiantes', 'independiente'];
for (var x = 0; x < equipos.length; x++) {
    alert(equipos[x]);
    console.log(equipos)
} 

//5) b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
for (var y = 0; y < equipos.length; y++) {
    var myVar;
    myVar = equipos[y].substring(0,1).toUpperCase() + equipos[y].substring(1).toLowerCase();
    alert(myVar);
}

//5) c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = "";
for (var z = 0; z < equipos.length; z++) {
    sentence = sentence + equipos[z];
}
alert(sentence);

//5) d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var myVar = [];
for (var f = 0; f < 10; f++) {
    myVar.push(f)
}
console.log(myVar)
//************************************************************************************************************************************/