const db = require('../../config/db')
const {perfil: obterPerfil } = require('../Query/perfil')
module.exports = {
    async novoUsuario(_, { dados }) {
        try{
            const idPerfis = []
            if(dados.perfis){
                for (const filtro of dados.perfis) {
                    const perfil = await obterPerfil(_,{ filtro })
                    if (perfil) idPerfis.push(perfil.id)
                }
            }
            delete dados.perfis
            const [ id ] = await db('usuarios').insert({...dados})
            for (const perfil_id of idPerfil) {
                await db('usuarios_perfis')
                    .insert({perfil_id, usuario_id: id})
            }
            return db('usuarios').where({ id })
        }catch (e){
            throw new Error(e.sqlMessage)
        }
    },
    async excluirUsuario(_, { filtro }) {
        // Implementar
    },
    async alterarUsuario(_, { filtro, dados }) {
        // Implementar
    }
}