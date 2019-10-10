const db = require('../../config/db')

module.exports = {
    async novoUsuario(_, { dados }) {
        db('usuarios').insert(dados)
    },
    async excluirUsuario(_, { filtro }) {
        // Implementar
    },
    async alterarUsuario(_, { filtro, dados }) {
        // Implementar
    }
}