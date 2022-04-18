// Function:
//Ejercicios: 
//6) a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
var myVar;
function suma (a,b){
    return a + b;
}
myVar= suma(5,15);
console.log('\nResultado:');
console.log(myVar);

//6) b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sumaB (a,b) {
    if (typeof a != 'number' | typeof b != 'number') {
        alert("Error de parametro.\nNo es un numero\nValor volvio a NaN")
        return NaN;
    }
    else{
        return a + b;
    }
}

//6) c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(x){
    if(typeof x === 'number'){
        return true;
    }
}

//6) d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function sumaB (a,b){
    if(typeof a != 'number' | typeof b != 'number'){
        alert("Error de parametro.\nNo es un numero\nValor volvio a NaN")
        return NaN;
    }
    else{
        var resultadoA = (a % 1 === 0) ? true : false;
        if (!resultadoA) {
            alert('ERROR, no es un numero entero, es un numero decimal');
            a = Math.round()
        }
        var resultadoB = (a % 1 === 0) ? true : false;
        if (!resultadoB) {
            alert('ERROR, no es un numero entero, es un numero decimal');
            b = Math.round ()
    }
    return a + b;
}

//6) e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function validateInteger(a){
    var resultadoA = (a % 1 === 0) ? true : false;
    if (!resultadoA) {alert ('ERROR, no es un numero entero');
        a = Math.round()
    }
    return a;
}
function sumaB (a,b){
    if (typeof a!= 'number' | typeof b !='number'){
        alert("Error de parametro.\nNo es un numero\nValor volvio a NaN")
        return NaN;
    }
    else {
        validateInteger(a);
        validateInteger(b);
        return a + b;
    }
}
}