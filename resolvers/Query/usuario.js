const { usuarios } = require('../../data/db')

module.exports = {
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
    usuarios(){
        return usuarios
    },
    usuario(_, { id }){
        const selecionados = usuarios.filter(u => u.id == id)        
        return selecionados ? selecionados[0] : null
    }
}