abstract class ContaBancario{
    protected numeroConta:string
    protected saldo: number
    protected titular: string

    constructor(numeroConta:string,saldo:number,titular:string){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
    abstract deposito(deposito:number):void;
     abstract sacar(sacar:number):void;
     abstract consultarSaldo():number;
}
class ContaCorrente extends ContaBancario{

limiteChequeEspecial(valorCheque:number):number{
    let limiteDoCheque=this.saldo-valorCheque;
     
return 0
}
    deposito(deposito:number):void{
        let posDeposito= this.saldo+deposito;
        this.saldo= posDeposito;
         console.log("Ola vc efetuou um deposito de " + deposito + ". o seu saldo agora é de:"+posDeposito+ " reais");
}
 sacar(sacar:number):void{
    let posSaque=this.saldo-sacar
    let valorAceito= " Sua conta não pode efetuar esse valor de saque";
    this.saldo = posSaque
    if(this.saldo <= sacar)
    {
        valorAceito="Ola você efetuou um saque de " + posSaque + ".o saque foi efetuado seu saldo agora é de: "+ this.saldo ;
    }
    console.log(valorAceito +".");
}
consultarSaldo():number{
    return this.saldo
}

}