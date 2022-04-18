// Arrays:
//Ejercicios: 
//3) a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4]);
console.log(meses [10]);

//3)b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.sort();
console.log(meses);

//3) c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.push("Último elemento");
meses.unshift('Primer elemento');
console.log(meses);

//3) d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.pop();
meses.shift();
console.log(meses);

//3) e. Invertir el orden del array (utilizar reverse).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.reverse();
console.log(meses);

//3) f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses = meses.join(' - ')
console.log(meses);

//3) g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses = meses.slice(4, 11);
console.log(meses);
//************************************************************************************************************************************/