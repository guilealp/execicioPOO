"use strict";
class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    produto() {
        return "Olá esse " + this.nome + " tem o valor de " + this.valor + " reais.";
    }
    desconto(desconto) {
        let valorDesconto = (this.valor / 100) * desconto;
        return "desconto de " + desconto + "% aplicado. Novo preço " + (this.valor - valorDesconto);
    }
}
let produto1 = new Produto("Computador t15", 10000);
console.log(produto1.produto());
console.log(produto1.desconto(10));
let produto2 = new Produto("iphone 14 PRO MAX", 11500);
console.log(produto2.produto());
console.log(produto2.desconto(16));
let produto3 = new Produto("xbox serie X", 4500);
console.log(produto3.produto());
console.log(produto3.desconto(7));
