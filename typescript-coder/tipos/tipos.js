"use strict";
// declarando sem nenhum tipo explícito
// tipo pode ser alterado
let minhaIdade; // semelhante a: let minhaIdade: any;
minhaIdade = 20;
minhaIdade = '20 anos';
minhaIdade = {
    idade: '20 anos'
};
// declarando variável com seu tipo explícito
// tipo não pode ser alterado
let minhaIdade2 = 20; // semelhante a: let minhaIdade2: number = 20;
//minhaIdade2 = '20 anos'; //não permite atribuição, explicitamente minhaIdade2 é tipo number.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TUPLAS:
let endereco = ['Rua Amarela', 29];
endereco = ['Nova Rua', 30];
//endereco = ['Nova Rua 2', '30']; não aceita atribuição, tipos não coincidem.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OBJETOS
let usuario = {
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
let funcionario = {
    supervisor: ['Ana Lima', 'Pedro Ferreira', 'João Silva'],
    baterPonto(hora) {
        return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario.supervisor);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisor: ['Ana Lima', 'Pedro Ferreira', 'João Silva'],
    baterPonto(hora) {
        return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UNION TYPES
let nota = 10; //define mais de um tipo
console.log(`Minha nota é ${nota}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//NEVER
//quando vai explicitar que a função ou retornará erro ou ficará em algum tipo de loop
function falha(msg) {
    // while(true){
    // }
    throw new Error(msg);
}
const produto = {
    nome: ' ',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome.');
        }
        if (this.preco) {
            falha('Preço inválido.');
        }
    }
};
let contaBancaria = {
    saldo: 1234,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['12345678', '87654321']
};
correntista.contaBancaria.depositar(100);
console.log(correntista);
