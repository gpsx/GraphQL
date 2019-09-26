const { perfils } = require('../../data/db')

module.exports = {
    perfis(){
        return perfils
    },
    perfil(_, { id}){
        const selecionados = perfils.filter(u => u.id == id)        
        return selecionados ? selecionados[0] : null
    }
}