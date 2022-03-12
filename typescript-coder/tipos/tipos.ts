// declarando sem nenhum tipo explícito
// tipo pode ser alterado
let minhaIdade; // semelhante a: let minhaIdade: any;
minhaIdade = 20;
minhaIdade = '20 anos';
minhaIdade = {
    idade : '20 anos'
}

// declarando variável com seu tipo explícito
// tipo não pode ser alterado
let minhaIdade2 = 20; // semelhante a: let minhaIdade2: number = 20;
//minhaIdade2 = '20 anos'; //não permite atribuição, explicitamente minhaIdade2 é tipo number.


//TUPLAS:
let endereco: [string, number] = ['Rua Amarela', 29];
endereco = ['Nova Rua', 30];
//endereco = ['Nova Rua 2', '30']; não aceita atribuição, tipos não coincidem.