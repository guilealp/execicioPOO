class Escola {
    nome: string;
    idade: number;
    nota: number[];

    constructor(nome: string, idade: number, notas: number[]) {
        this.nome = nome;
        this.idade = idade;
        this.nota = notas;
    }
    media() {

        let soma = 0;
        for (let i = 0; i < this.nota.length; i++) {
            soma += this.nota[i];
        }
        const media = soma / this.nota.length;

        if (media < 7) {
            return this.nome + ", sua média é " + media + "  e você precisa estudar mais para melhorar seu desempenho. "
        }

        return "Parabéns, " + this.nome + " Sua média é " + media + " e você está aprovado(a).";


    }
}

let estudante = new Escola("edson", 16, [8, 9, 3, 10, 9])
console.log(estudante.media());