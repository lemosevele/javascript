console.log(seraQuePode);
var seraQuePode = '?'; // hoisting

let estaFrio = true;
if(estaFrio){
    var acao = 'Colocar casaco!';
}
console.log(acao); // consegue imprimir

function revelar(){
    var segredo = 'secreto'; //var tem escopo de função
}
//console.log(segredo); //não imprime pois VAR tem escopo de função

const cpf = '123-456-789-00';
//cpf = '098-765-432-11'; //nao atribui
console.log(cpf)

{
    const c = 'c';
    let l = 'l';
}

// console.log(c);
// console.log(l)

for (var i = 0; i <= 10; i++) {
    console.log(i)
}
console.log(i)