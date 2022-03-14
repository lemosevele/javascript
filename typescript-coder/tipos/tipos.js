"use strict";
// declarando sem nenhum tipo explícito
// tipo pode ser alterado
var minhaIdade; // semelhante a: let minhaIdade: any;
minhaIdade = 20;
minhaIdade = '20 anos';
minhaIdade = {
    idade: '20 anos'
};
// declarando variável com seu tipo explícito
// tipo não pode ser alterado
var minhaIdade2 = 20; // semelhante a: let minhaIdade2: number = 20;
//minhaIdade2 = '20 anos'; //não permite atribuição, explicitamente minhaIdade2 é tipo number.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TUPLAS:
var endereco = ['Rua Amarela', 29];
endereco = ['Nova Rua', 30];
//endereco = ['Nova Rua 2', '30']; não aceita atribuição, tipos não coincidem.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OBJETOS
var usuario = {
    nome: 'João',
    idade: 20
};
// usuario = {
//     name = 'João Silva',
//     age: 21
// }
usuario = {
    nome: 'João Silva',
    idade: 21
};
//desafio:
var funcionario = {
    supervisor: ['Ana Lima', 'Pedro Ferreira', 'João Silva'],
    baterPonto: function (hora) {
        return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario.supervisor);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
var funcionario2 = {
    supervisor: ['Ana Lima', 'Pedro Ferreira', 'João Silva'],
    baterPonto: function (hora) {
        return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UNION TYPES
var nota = 10; //define mais de um tipo
console.log("Minha nota \u00E9 " + nota);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//NEVER
//quando vai explicitar que a função ou retornará erro ou ficará em algum tipo de loop
function falha(msg) {
    // while(true){
    // }
    throw new Error(msg);
}
var produto = {
    nome: ' ',
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome.');
        }
        if (this.preco) {
            falha('Preço inválido.');
        }
    }
};
var contaBancaria = {
    saldo: 1234,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['12345678', '87654321']
};
correntista.contaBancaria.depositar(100);
console.log(correntista);
