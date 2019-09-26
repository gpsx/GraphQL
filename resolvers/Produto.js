module.exports = {
    precoComDesconto(produto){
        return produto.preco - ((produto.preco * produto.desconto)/100)
    },
    desconto(produto){
        return `${produto.desconto}%`
    }
}