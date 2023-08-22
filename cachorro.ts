class Cachorro{
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string,idade: number){
        this.nome= nome;
        this.raca= raca;
        this.idade= idade;
    }
    apresentar(){
        return "oi, eu sou "+ this.nome +" um "+this.raca+" de "+this.idade+" anos";
    }
    apresentarPara(humano:string){
        return "ola, " +  humano +" eu sou "+ this.nome +" um "+this.raca+" de "+this.idade+" anos";
    }
}

let rex = new Cachorro("rex" , "labrador", 3);
let zeus = new Cachorro("zeus" , "husky", 1);

console.log(rex.nome);
console.log(zeus.nome);
console.log(rex.apresentar());
console.log(zeus.apresentar());
console.log(rex.apresentarPara("guilherme"));
console.log(zeus.apresentarPara("guilherme"));

