"use strict";
class CarrinhoDeCompras {
    constructor() {
        this.produtosDoCarrinho = [];
        // this.produtosDoCarrinho
    }
    adicionarProduto(produto) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(nomeDoProduto) {
        this.produtosDoCarrinho.filter((item) => item.nome !== nomeDoProduto);
    }
    excluirProduto2(produto) {
        this.produtosDoCarrinho.filter((item) => item.nome !== produto.nome);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
    }
    exibirProdutosDoCarrinho() {
        console.log("produtos do carrinho");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("produto:" + this.produtosDoCarrinho[i].nome + "R$" + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
