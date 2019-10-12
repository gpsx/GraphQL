const db = require('../../config/db')

module.exports = {
    async novoPerfil(_, { dados }) {
        try {
            const [ id ] = await db('perfis').insert({ ...dados })
            return db('perfis').where({ id }).first()
        } catch{
            (e)=>{
                console.log(e); 
                throw new Error("Algo de errado não está certo!"+e);
            }   
        }
    },
    async excluirPerfil(_, { filtro }) {
        const { id, nome } = filtro
        db('perfis')
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