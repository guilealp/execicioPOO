"use strict";
class Banco {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    saldoBancario() {
        return "ola " + this.nome + " o seu saldo é de " + this.saldo + ".";
    }
    deposito(deposito) {
        let saldoFinal = this.saldo + deposito;
        this.saldo = saldoFinal;
        return "Ola vc efetuou um deposito de " + deposito + ". o seu saldo agora é de:" + saldoFinal + " reais";
    }
    realizarSaque(saque) {
        let PosSaque = this.saldo - saque;
        let valorAceito = " Sua conta não pode efetuar esse valor de saque";
        this.saldo = PosSaque;
        if (saque <= 1500) {
            valorAceito = "Ola você efetuou um saque de " + saque + ".o saque foi efetuado seu saldo agora é de: " + PosSaque;
        }
        return valorAceito + ".";
    }
    saquefinal(final) {
        let saquefinal = this.saldo - final;
        let valorAceito = " Sua conta não pode efetuar esse valor de saque";
        if (final <= this.saldo) {
            this.saldo = saquefinal;
            valorAceito = "Ola você efetuou um saque de " + final + ".o saque foi efetuado seu saldo agora é de: " + saquefinal;
        }
        return valorAceito + ".";
    }
    saldoFinal() {
        return "ola " + this.nome + " o seu saldo é de " + this.saldo + ".";
    }
}
let MinhaConta1 = new Banco("João", 1000);
console.log(MinhaConta1.saldoBancario());
console.log(MinhaConta1.deposito(500));
console.log(MinhaConta1.realizarSaque(200));
console.log(MinhaConta1.saquefinal(1500));
console.log(MinhaConta1.saldoFinal());
let MinhaConta2 = new Banco("andre", 20000);
console.log(MinhaConta2.saldoBancario());
console.log(MinhaConta2.deposito(500));
console.log(MinhaConta2.realizarSaque(200));
console.log(MinhaConta2.saquefinal(1500));
console.log(MinhaConta2.saldoFinal());
let MinhaConta3 = new Banco("guilherme", 2500);
console.log(MinhaConta3.saldoBancario());
console.log(MinhaConta3.deposito(500));
console.log(MinhaConta3.realizarSaque(200));
console.log(MinhaConta3.saquefinal(1500));
console.log(MinhaConta3.saldoFinal());
