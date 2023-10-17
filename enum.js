"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "Segunda Feira";
    DiasDaSemana["Ter\u00E7a"] = "Ter\u00E7a Feira";
    DiasDaSemana["Quarta"] = "Quarta Feira";
    DiasDaSemana["Quinta"] = "Quinta Feira";
    DiasDaSemana["Sexta"] = "Sexta Feira";
    DiasDaSemana["S\u00E1bado"] = "S\u00E1bado";
    DiasDaSemana["Domingo"] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.Domingo;
//console.log("hoje é "+ DiasDaSemana[diaHoje]);
console.log("hoje é " + diaHoje);
