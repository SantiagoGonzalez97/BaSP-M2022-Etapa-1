// strings:
//Ejercicios: 
//2) a.

var textoMinuscula;
textoMinuscula = 'este texto se mostrara en mayuscula';
console.log(textoMinuscula.toUpperCase());

//2) b.
var cadena;
cadena = 'Ejercicio de strings';
console.log(cadena.substring(0,5));

//2) c.
var cadenaC;
cadenaC = 'Ejercicio de strings';
console.log(cadenaC.substring (17))

//2) d.
var cadenaD, mayuscula, residuo, total;
cadenaD = 'ejercicio de strings';
mayuscula = cadenaD.substring(0,1);
mayuscula = mayuscula.toUpperCase();
residuo = cadenaD.slice(1);
total = mayuscula + residuo;
console.log(total);

//2) e.
var cadenaIndex;
cadenaIndex = 'Este es un texto'
console.log(cadenaIndex.indexOf(' '))

//2) f.

var texto;
texto = 'naturaleza rosarigacina'
texto = texto.substring(0,1).toUpperCase() + texto.substring(1,indexOf(' ')) + texto.substring(indexOf(' '), indexOf(' ') + 1)
console.log(texto)





