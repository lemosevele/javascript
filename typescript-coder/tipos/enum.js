"use strict";
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 100] = "Cinza";
    Cor[Cor["Verde"] = 101] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Rosa"] = 11] = "Rosa";
})(Cor || (Cor = {}));
console.log(Cor.Azul);
