const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const usuarios = [{
    id : 1,
    nome: "Astolfinho hitalar",
    email: "A@A3.com",
    idade: 2334,
    salario_real: 6.54,
    vip: true,
    perfil_id: 1
},{
    id : 2,
    nome: "ff hitalar",
    email: "A@Aq.com",
    idade: 2334,
    salario_real: 4.54,
    vip: true,
    perfil_id: 1
},{
    id : 3,
    nome: "sa hitalar",
    email: "A@A.gcom",
    idade: 2334,
    salario_real: 1.54,
    vip: true,
    perfil_id: 2
}]

const perfils = [{
    id: 1,
    nome: "Administrador"
},{
    id: 2,
    nome: "Comum"
}]

const resolvers = {

    Query: {
        ola(){
            return 'kk iae mains'
        },
        horaAtual(){
            return new Date
        },
        usuarioLogado() {
            return {
                id : 1,
                nome: "Astolfinho hitalar",
                email: "A@A.com",
                idade: 2334,
                salario_real: 12413413.54,
                vip: true
            }
        },
        produtoEmDestaque(){
            return {
                nome : "PC GAMYMER DE QUALIDADE HIGH-END",
                preco: 1000000,
                desconto: 25.0,
            }
        },
        numerosMega(){
            const crescente = (a,b) => a - b
            return Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(crescente)
        },
        usuarios(){
            return usuarios
        },
        usuario(_, { id }){
            const selecionados = usuarios.filter(u => u.id == id)        
            return selecionados ? selecionados[0] : null
        },
        perfis(){
            return perfils
        },
        perfil(_, { id}){
            const selecionados = perfils.filter(u => u.id == id)        
            return selecionados ? selecionados[0] : null
        }
    },
    Usuario: {
        salario(usuario){
            return usuario.salario_real
        },
        perfil(usuario) {
            const selecionados = perfils.filter(p => p.id == usuario.perfil_id)        
            return selecionados ? selecionados[0] : null
        }
    },
    Produto: {
        precoComDesconto(produto){
            return produto.preco - ((produto.preco * produto.desconto)/100)
        },
        desconto(produto){
            return `${produto.desconto}%`
        }
    }
}

const server = new ApolloServer({
    typeDefs: importSchema('./schemas/index.graphql'),
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
})
