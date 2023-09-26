"use strict";
class Escravo {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Escravo {
    constructor(nome, salario) {
        super(nome, salario);
    }
    mostrarSalario() {
        let salarioGerente = (this.salario / 100) * 10;
        return salarioGerente;
    }
}
class Desenvolvedor extends Escravo {
    constructor(nome, salario) {
        super(nome, salario);
    }
    mostrarSalario() {
        return this.salario;
    }
}
const escravo1 = new Gerente("jose", 5000);
const escravo2 = new Gerente("andre", 4500);
const dev1 = new Desenvolvedor("joao", 6000);
const dev2 = new Desenvolvedor("lucas", 4000);
console.log("salario mensal de gerente é R$" + escravo1.mostrarSalario());
console.log("salario mensal de gerente é R$" + escravo2.mostrarSalario());
console.log("salario mensal de dev é R$" + dev1.mostrarSalario());
console.log("salario mensal de dev é R$" + dev2.mostrarSalario());
