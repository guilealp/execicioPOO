const pessoa = new class {
    private primeiroNome = "jose";
    private ultimoNome = "da Silva";
    
    getNomeCompleto(){
        return this.primeiroNome + " " +  this.ultimoNome;
    
    }
}

console.log(pessoa.getNomeCompleto());

const pessoa2 = new class {
    private primeiroNome = "andre";
    private ultimoNome = "Luiz";
    
    getNomeCompleto(){
        return this.primeiroNome + " " +  this.ultimoNome;
    
    }
}
console.log(pessoa2.getNomeCompleto());

const treinadorPessoal = new class{
    private rotina: {nome:string; duracao: number}[]=[]

    adicionarExercicios(nome:string, duracao: number):void {
        this.rotina.push({nome, duracao});
    }
    calcularTempo():number{
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        return soma;
    }
}
console.log(treinadorPessoal.adicionarExercicios("corrida",30));
console.log(treinadorPessoal.adicionarExercicios("flexões",15));
console.log(treinadorPessoal.adicionarExercicios("agachamento",20));
console.log("tempo total necessario para a rotina: "+treinadorPessoal.calcularTempo()+" em minutos");
