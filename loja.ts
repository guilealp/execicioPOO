class ProdutoLoja {
    nome: string;
    preco: number;
    constructor(nomeDoProduto: string, precoDoProduto: number) {
        this.nome = nomeDoProduto
        this.preco = precoDoProduto
    }

}
class CarrinhoDeCompras {
    produtosDoCarrinho: ProdutoLoja[] = [];
    constructor() {
        // this.produtosDoCarrinho
    }
    adicionarProduto(produto: ProdutoLoja) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(nomeDoProduto: string) {
        this.produtosDoCarrinho.filter((item) => item.nome !== nomeDoProduto);
    }
    excluirProduto2(produto: ProdutoLoja) {
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
    produtosDoEstoque: ProdutoLoja[] = [];
    carrinhoDeCompra = new CarrinhoDeCompras();
    constructor() {

    }
    adicionarProdutoAoEstoque(produto: ProdutoLoja) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutodoEstoque(produto: ProdutoLoja) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome)
    }
    adicionarProdutoAoCarrinho(produto: ProdutoLoja) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome = produto.nome)
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "produto adicionado"
        } else {
            return "produto nao encontrado "
        }
    }
    removerProdutoDoCarrinho(produto: ProdutoLoja) {
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