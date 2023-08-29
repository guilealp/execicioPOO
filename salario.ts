class Salario{
    nome:string;
    cargo:string;
    bruto:number;

    constructor(nome:string, cargo:string, bruto:number){
        this.nome = nome
        this.cargo = cargo 
        this.bruto = bruto
    }

    liquido(INSS:number,Imposto:number){
        let valorInss = (this.bruto/ 100) * INSS;
        let valorImposto = (this.bruto / 100) * Imposto;
        let saldoLiquido= (this.bruto-valorInss)-valorImposto;
        this.bruto=saldoLiquido;

        return "olá "+this.nome+" seu salario bruto é R$"+this.bruto+" trabalhando no setor "+this.cargo
        + " mas o seu salario liquido sera de R$"+saldoLiquido
        + " tendo o desconto INSS de R$"+valorInss+ " e do Impostos de R$"+valorImposto;

    }
    aumento(aumento:number){
        let valorAumento = (this.bruto/ 100) * aumento;
        let salarioFinal = valorAumento+this.bruto;
        this.bruto=salarioFinal;

        return "Você recebeu um aumento de R$"+valorAumento+" com o seu salario liquido virando R$"+salarioFinal

    }
    apresentacaoFinal(){
        return "Ola "+this.nome+ " trabalhando no cardo de "+this.cargo+ " o seu salario liquido final sera de R$"+this.bruto
    }
}
let trabalhador1 = new Salario("Ana silva","Analista de Vendas",3000)
console.log(trabalhador1.liquido(11,7.5));
console.log(trabalhador1.aumento(10));
console.log(trabalhador1.apresentacaoFinal());

let trabalhador2 = new Salario("Lucas","Analista de Vendas",1500)
console.log(trabalhador2.liquido(11,7.5));
console.log(trabalhador2.aumento(10));
console.log(trabalhador2.apresentacaoFinal());


