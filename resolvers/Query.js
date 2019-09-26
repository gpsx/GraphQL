const { usuarios, perfils } = require('../data/db')

module.exports = {
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
}