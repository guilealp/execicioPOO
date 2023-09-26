"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresantar() {
        console.log("Este é um " + this.nome + " com " + this.qtdPatas + " patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("o cachorro esta latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("gato", 4);
    }
    fazerBarulho() {
        console.log("o gato esta miando");
    }
}
class Bird extends Animal {
    constructor() {
        super("passaro", 2);
    }
    fazerBarulho() {
        console.log("o passaro esta cantando");
    }
}
const cachorro = new Dog();
cachorro.apresantar();
cachorro.fazerBarulho();
const gato = new Cat();
gato.apresantar();
gato.fazerBarulho();
const passaro = new Bird();
passaro.apresantar();
passaro.fazerBarulho();
