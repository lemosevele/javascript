// Links úteis:
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// https://aka.ms/tsco

let canal: string = 'Gaveta';
let inscritos: number = 610234;


////////////////////////////////////////////

//let endereco: string = 'evele'; //foi declarado em outro arquivo e tem o mesmo contexto

(function() {
    let endereco: string = 'evele'; //contexto diferente
    endereco = 'kelle';
    return endereco; // dá erro de compilacao se a variavel endereço nao for lida/retornada pois noUnusedLocals = true;
})();

////////////////////////////////////////////

function soma(a:any, b:any){
    return a+b;
}

////////////////////////////////////////////

function saudar(isManha: boolean){
    let saudacao: string;
    if(isManha){
        saudacao = 'Bom dia!';
    }else{
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
    // return saudacao; //erro se comentar 'saudacao' em algum bloco, pois strictNullChecks = true, precisa atribuir valor a variavel
}