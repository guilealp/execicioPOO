"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "jose";
        this.ultimoNome = "da Silva";
    }
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const pessoa2 = new class {
    constructor() {
        this.primeiroNome = "andre";
        this.ultimoNome = "Luiz";
    }
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa2.getNomeCompleto());
const treinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempo() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        return soma;
    }
};
console.log(treinadorPessoal.adicionarExercicios("corrida", 30));
console.log(treinadorPessoal.adicionarExercicios("flexões", 15));
console.log(treinadorPessoal.adicionarExercicios("agachamento", 20));
console.log("tempo total necessario para a rotina: " + treinadorPessoal.calcularTempo() + " em minutos");
