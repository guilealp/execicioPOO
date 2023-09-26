"use strict";
class ContaBancario {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancario {
    limiteChequeEspecial(valorCheque) {
        let limiteDoCheque = this.saldo - valorCheque;
        return 0;
    }
    deposito(deposito) {
        let posDeposito = this.saldo + deposito;
        this.saldo = posDeposito;
        console.log("Ola vc efetuou um deposito de " + deposito + ". o seu saldo agora é de:" + posDeposito + " reais");
    }
    sacar(sacar) {
        let posSaque = this.saldo - sacar;
        let valorAceito = " Sua conta não pode efetuar esse valor de saque";
        this.saldo = posSaque;
        if (this.saldo <= sacar) {
            valorAceito = "Ola você efetuou um saque de " + posSaque + ".o saque foi efetuado seu saldo agora é de: " + this.saldo;
        }
        console.log(valorAceito + ".");
    }
    consultarSaldo() {
        return this.saldo;
    }
}
