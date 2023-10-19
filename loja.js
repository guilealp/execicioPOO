"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}
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
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompras();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutodoEstoque(produto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "produto adicionado";
        }
        else {
            return "produto nao encontrado ";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto.nome);
        this.carrinhoDeCompra.excluirProduto2(produto);
    }
    exibirProdutosDoCarrinho() {
        this.carrinhoDeCompra.exibirProdutosDoCarrinho();
    }
}
const ProdutoLoja1 = new ProdutoLoja("camiseta", 29.99);
const ProdutoLoja2 = new ProdutoLoja("blusa", 30.99);
const ProdutoLoja3 = new ProdutoLoja("sapato", 49.99);
const ProdutoLoja4 = new ProdutoLoja("tenis", 79.99);
const minhaLoja = new Loja();
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);
minhaLoja.removerProdutoDoCarrinho(ProdutoLoja4);
minhaLoja.removerProdutodoEstoque(ProdutoLoja4);
minhaLoja.exibirProdutosDoCarrinho();
//minhaLoja.carrinhoDeCompra.exibirProdutosDoCarrinho();
console.log("total de carrinho de compras: R$" + minhaLoja.carrinhoDeCompra.calcularValorTotal());
