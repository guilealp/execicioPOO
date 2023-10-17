class ProdutoLoja {
    nome: string
    valor: number

    constructor(nome: string, valor: number) {

        this.nome = nome
        this.valor = valor

    }
}
class CarrinhoDeCompras {

    carrinho: ProdutoLoja[] = []

    constructor() {
    }

    adicionarProduto(Produtos: ProdutoLoja) {
        this.carrinho.push(Produtos)
    }
    removerProduto(produtos: ProdutoLoja) {
        this.carrinho = this.carrinho.filter((item) => item.nome !== produtos.nome)
    }
    valorFinal() {
        let soma = 0;
        for (let i = 0; i < this.carrinho.length; i++) {
            soma += this.carrinho[i].valor;
        }
        return soma
    }

    visualizarProduto() {
        for (let i = 0; i < this.carrinho.length; i++) {
            console.log(this.carrinho[i].nome + " no valor " + this.carrinho[i].valor);
        }
    }
}
class Loja {
    Estoque: ProdutoLoja[] = []
    carrinho = new CarrinhoDeCompras();
    constructor() {
    }
    adicionarEstoque(produtos: ProdutoLoja) {
        this.Estoque.push(produtos)
    }
    removerEstoque(produtos: ProdutoLoja) {
        this.Estoque = this.Estoque.filter((item) => item.nome !== produtos.nome)
    }
    adicionarProdutoNoCarrinho(produto: ProdutoLoja) {
        const produtoEncontrado = this.Estoque.find(
            item => item.nome == produto.nome
        );
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(produto)

            return "produto adicionado ao carrinho de compras"
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerProdutoDoCarrinho(produto: ProdutoLoja) {
        const produtoEncontrado = this.Estoque.find(
            item => item.nome == produto.nome
        );
        if (produtoEncontrado) {
            this.carrinho.removerProduto(produto);

            return "produto removido do carrinho"
        }
        else {
            return "Produto não encontrado no carrinho";
        }
    }
    visualizarEstoque() {
        for (let i = 0; i < this.Estoque.length; i++) {
            console.log(this.Estoque[i].nome + " no valor " + this.Estoque[i].valor);
        }
    }


}
const produtos1 = new ProdutoLoja("leite", 10.00);
const produtos2 = new ProdutoLoja("ovo", 8.00);
const produtos3 = new ProdutoLoja("sal", 5.00);
const produtos4 = new ProdutoLoja("picanha", 40.00);


const carrinhoList = new CarrinhoDeCompras();
carrinhoList.adicionarProduto(produtos1)
carrinhoList.adicionarProduto(produtos2)
carrinhoList.adicionarProduto(produtos3)

const estoque = new Loja();

estoque.adicionarEstoque(produtos1)
estoque.adicionarEstoque(produtos2)
estoque.adicionarEstoque(produtos3)
estoque.adicionarEstoque(produtos4)


console.log(carrinhoList.visualizarProduto());
console.log(carrinhoList.removerProduto(produtos2));
console.log(estoque.removerProdutoDoCarrinho(produtos1));
console.log(estoque.adicionarProdutoNoCarrinho(produtos4));
console.log(estoque.visualizarEstoque());
console.log(carrinhoList.valorFinal());
