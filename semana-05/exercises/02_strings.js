// strings:
//Ejercicios: 
//2) a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var textoMinuscula;
textoMinuscula = 'este texto se mostrara en mayuscula';
console.log(textoMinuscula.toUpperCase());

//2) b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var cadena;
cadena = 'Ejercicio de strings';
console.log(cadena.substring(0,5));

//2) c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var cadenaC;
cadenaC = 'Ejercicio de strings';
console.log(cadenaC.substring (17))

//2) d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var cadenaD, mayuscula, residuo, total;
cadenaD = 'ejercicio de strings';
mayuscula = cadenaD.substring(0,1);
mayuscula = mayuscula.toUpperCase();
residuo = cadenaD.slice(1);
total = mayuscula + residuo;
console.log(total);

//2) e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var cadenaIndex;
cadenaIndex = 'Este es un texto'
console.log(cadenaIndex.indexOf(' '))

//2) f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var cadenaF, total;
cadenaF = 'naturaleza rosarigacina';
total = cadenaF.substring(0,1).toUpperCase() + cadenaF.substring(1, cadenaF.indexOf(" ")).toLowerCase() 
+ " " + cadenaF.substring(cadenaF.indexOf(" ") + 1, cadenaF.indexOf(" ") + 2).toUpperCase() + 
cadenaF.substring(cadenaF.indexOf(" ") + 2).toLowerCase();
console.log('\n-Exercise 2.f:');
console.log(total);
//************************************************************************************************************************************/
