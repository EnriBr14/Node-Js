function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

//Ca

function hacerUnaOperacion(x,y,operacion){
    console.log(operacion(x,y));
}
console.log("Sumar 4 + 3: ");
hacerUnaOperacion(4,3,sumar);
console.log("Resta 4 - 3:: ");
hacerUnaOperacion(4,3,restar)
console.log("Multiplicacion 4 * 3:: " );
hacerUnaOperacion(4,3,multiplicar)