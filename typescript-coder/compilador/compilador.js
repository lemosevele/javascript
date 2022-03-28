"use strict";
// Links úteis:
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// https://aka.ms/tsco
let canal = 'Gaveta';
let inscritos = 610234;
////////////////////////////////////////////
//let endereco: string = 'evele'; //foi declarado em outro arquivo e tem o mesmo contexto
(function () {
    let endereco = 'evele'; //contexto diferente
    endereco = 'kelle';
    return endereco; // dá erro de compilacao se a variavel endereço nao for lida/retornada pois noUnusedLocals = true;
})();
////////////////////////////////////////////
function soma(a, b) {
    return a + b;
}
////////////////////////////////////////////
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
    // return saudacao; //erro se comentar 'saudacao' em algum bloco, pois strictNullChecks = true, precisa atribuir valor a variavel
}
