"use strict";
// função anonima
const somar = function (n1, n2) {
    return n1 + n2;
};
//função
function somar2(n1, n2) {
    return n1 + n2;
}
//arrow function
const subtrair = (n1, n2) => n1 - n2; //'return' implicito
const subtrair2 = (n1, n2) => {
    return n1 + n2;
};
const saudacao = () => console.log('Oi');
//THIS - numa funcao arrow o this nunca varia
function normalComThis() {
    console.log(this);
}
const normalComThisEspecial = normalComThis.bind({ nome: 'Evele' });
normalComThis();
normalComThisEspecial();
//this??
console.log(this); //mesmo 'this' da funcao arrow abaixo
const arrowComThis = () => console.log(this);
arrowComThis();
const arrowComThisEspecial = arrowComThis.bind({ nome: 'Evele' }); //'this' continua sendo o mesmo
arrowComThisEspecial();
//parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva(3);
contagemRegressiva();
