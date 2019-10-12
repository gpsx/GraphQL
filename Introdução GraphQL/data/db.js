let id = 1
function proximoId() {
    return id++
}
const usuarios = [{
    id : proximoId(),
    nome: "Astolfinho hitalar",
    email: "A@A3.com",
    idade: 2334,
    salario_real: 6.54,
    vip: true,
    perfil_id: 1,
    status: 'ATIVO'
},{
    id : proximoId(),
    nome: "ff hitalar",
    email: "A@Aq.com",
    idade: 2334,
    salario_real: 4.54,
    vip: true,
    perfil_id: 1,
    status: 'ATIVO'
},{
    id : proximoId(),
    nome: "sa hitalar",
    email: "A@A.gcom",
    idade: 2334,
    salario_real: 1.54,
    vip: true,
    perfil_id: 2,
    status: 'ATIVO'
}]

const perfils = [{
    id: 1,
    nome: "Administrador"
},{
    id: 2,
    nome: "Comum"
}]

module.exports= { usuarios, perfils, proximoId }