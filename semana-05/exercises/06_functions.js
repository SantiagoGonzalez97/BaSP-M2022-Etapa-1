// Function:
//Ejercicios: 
//6) a.
var myVar;
function suma (a,b){
    return a + b;
}
myVar= suma(5,15);
console.log('\nResultado:');
console.log(myVar);

//6) b.
function sumaB (a,b) {
    if (typeof a != 'number' | typeof b != 'number') {
        alert("Error de parametro.\nNo es un numero\nValor volvio a NaN")
        return NaN;
    }
    else{
        return a + b;
    }
}

//6) c.
function validateInteger(x){
    if(typeof x === 'number'){
        return true;
    }
}

//6) d.
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

//6) e.
function validateInteger(a){
    var resultadoA = (a % 1 === 0) ? true : false;
    if (!resultadoA) {
        alert ('ERROR, no es un numero entero');
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
//***********************************************************************************************************************************/