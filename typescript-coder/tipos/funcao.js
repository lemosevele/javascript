"use strict";
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
var calculo; //tipo any
calculo = digaOi;
calculo = multiplicar;
console.log(calculo(2, 2));
//TIPO FUNÇÃO
var calculo2; //define a assinatura, como será os parâmetros de entrada e retorno
calculo2 = multiplicar; //aceita a atribuição pois recebe e retorna mesmos parametros
//calculo2 = digaOi; //não aceita atribuição
console.log(calculo2(2, 4));
