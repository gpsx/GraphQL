const { perfils, proximoId } = require('../../data/db')
function indiceUsuario(filtro){
    if(!filtro) return -1
    const {id, email } = filtro
    if (id) {
        return usuarios.findIndex(u => u.id == id)
    }else if(email){
        return usuarios.findIndex(u => u.email == email)
    }
    return -1
}
module.exports = {
    novoPerfil(_, { nome }){
        const perfilExistente = perfils.some(p => p.nome == nome)
        if (perfilExistente) throw new Error("Perfil já existente")
        const novo = {
            id: 2,
            nome
        }
        
        perfils.push(novo)
        return novo
    },
    excluirPerfil(_, { id }){
        const perfilExistente = perfils.some(p => p.id == id)
        if (!perfilExistente) throw new Error("Perfil não existente")
        const i = perfils.findIndex(p => p.id == id)
        const excluidos = perfils.splice(i, 1)
        return excluidos[0]
    },
    alterarPerfil(_, args){
        const i = perfils.findIndex(p => p.id == args.id)
        if (i < 0) throw new Error('Perfil não existe')
        const perfil = {
            ...perfils[i],
            ...args
        }
        perfils.splice(i, 1, perfil)
        return perfil
    }
}