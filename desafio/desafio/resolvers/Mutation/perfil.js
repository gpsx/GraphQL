const db = require('../../config/db')

module.exports = {
    async novoPerfil(_, { dados }) {
        try {
            await db('perfis').insert({ ...dados })
            return db('perfis').orderBy('id', 'desc').first()
        } catch(e){
                throw new Error(e.sqlMessage);   
        }
    },
    async excluirPerfil(_, { filtro }) {
        if (!filtro) return null
        const { id, nome } = filtro
        if (id) {
            await db('perfis').where({ id }).delete()
            return { id }
        }else if (nome) {
            await db('perfis').where({ nome }).delete()
            return { nome }
        }else{
            throw new Error('Eroo!')
        }
    },
    async alterarPerfil(_, { filtro, dados }) {
        if(!filtro || !dados) return null
        const { id, nome } = filtro
        if (id) {
            await db('perfis').where({ id }).update({ ...dados })
            return db('perfis').where({ id }).first()
        }else if (nome) {
            await db('perfis').where({ nome }).update({ ...dados })
            return db('perfis').where({ nome: dados.nome }).first()
             
        }else{
            throw new Error('Erro!')
        }
    }
}