// For:
//Ejercicios: 
//5) a.
var equipos = ['river', 'central', 'newells', 'estudiantes', 'independiente'];
for (var x = 0; x < equipos.length; x++) {
    alert(equipos[x]);
    console.log(equipos)
} 

//5) b.
for (var y = 0; y < equipos.length; y++) {
    var myVar;
    myVar = equipos[y].substring(0,1).toUpperCase() + equipos[y].substring(1).toLowerCase();
    alert(myVar);
}

//5) c.
var sentence = "";
for (var z = 0; z < equipos.length; z++) {
    sentence = sentence + equipos[z];
}
alert(sentence);

//5) d.
var myVar = [];
for (var f = 0; f < 10; f++) {
    myVar.push(f)
}
console.log(myVar)
//************************************************************************************************************************************/