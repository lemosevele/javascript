//SPREAD

const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernado', ...turmaA, 'Miguel', 'Lorena'];
console.log(turmaB);


//REST

function retornarArray(primeiroElemento: number, ...args: number[]): number[]{
    console.log(primeiroElemento)
    return args;
}

const numeros = retornarArray(2, 3, 5, 6546, 23, 4);
console.log(numeros);
console.log(retornarArray(...numbers));


// REST E SPREAD (TUPLA)

const tupla: [number, string, boolean] = [1, 'abd', false];

function tuplaParam1(a: number, b: string, c:boolean){
    console.log(`1) ${a} ${b} ${c}`);
}

function tuplaParam2(...params: [number, string, boolean]){
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam1(...tupla);

tuplaParam2(...tupla);



// DESTRUCTURING (ARRAY)

const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas;
console.log(motor)
console.log(ano)


// DESTRUCTURING (OBJECT)

const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado',
    },
}
// const nomeItem = item.nome;
// const precoItem = item.preco;

const { nome: n, preco, caracteristicas: { w } } = item; //n é alias
console.log(n);
console.log(preco);
console.log(w);
