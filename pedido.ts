enum StatusPedido{
    Aguardando =  "Aguardando Preparo" ,
    Preparo = "Em Preparo",
    Saiu ="Saiu para Entrega",
    Entregue=  "Entregue."
}
class ProdutoPedido{
    nome: string;
    valor: number;

    constructor(nome: string, valor: number){
        this.nome =nome
        this.valor =valor
    }
}
class Pedido{
    private produtos: ProdutoPedido[]; 
    private status: StatusPedido;

    constructor(){
        this.produtos = [];
        this.status = StatusPedido.Aguardando;
    }
    adicionarProduto(Produtos: ProdutoPedido) {
        this.produtos.push(Produtos)
        this.status
    }
    atualizarStatus(status: StatusPedido){
        this.status = status
    }
    exibirStatus(){
        return this.status
    }
    exibirProdutosDoPedido(){
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].nome + " no valor " + this.produtos[i].valor + " "+this.status);
        }
    }
}
const pedido1 = new ProdutoPedido("x-tudo", 23.00);
const pedido2 = new ProdutoPedido("hotdog", 8.00);
const pedido3 = new ProdutoPedido("frango frito", 25.00);


const pedidoList = new Pedido();
pedidoList.adicionarProduto(pedido1)
pedidoList.adicionarProduto(pedido2)
pedidoList.adicionarProduto(pedido3)
console.log(pedidoList.exibirProdutosDoPedido());
pedidoList.atualizarStatus(StatusPedido.Preparo)
console.log(pedidoList.exibirProdutosDoPedido());
pedidoList.atualizarStatus(StatusPedido.Saiu)
console.log(pedidoList.exibirProdutosDoPedido());
pedidoList.atualizarStatus(StatusPedido.Entregue)
console.log(pedidoList.exibirProdutosDoPedido());
