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
        // implementar
    },
    async alterarPerfil(_, { filtro, dados }) {
        // implementar
    }
}