const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    novoUsuario = {
        nome,
        email,
        senha
    }
    usuario = await db('usuarios').where({ email }).first()
    if (usuario == undefined ) {
        await db('usuarios').insert(novoUsuario)
    }else{
        await db('usuarios')
            .where({ email })
            .update(novoUsuario)
    }
    return await db('usuarios').where({ nome }).first()
}

async function salvarPerfil(nome, rotulo) {
    novoPerfil = { nome, rotulo }
    perfil = await db('perfis').where({ nome }).first()
    if (perfil == undefined) {
        await db('perfis').insert(novoPerfil)
    }else{
        await db('perfis')
        .where({ nome })
        .update(novoPerfil)
    }
    return await db('perfis').where({ nome: novoPerfil.nome}).first()
}

async function adicionarPerfis(usuario, ...perfis) {
    console.log(perfis);
    
    idPerfil = []
    for (const perfil of perfis) {
        idPerfil.push(
            await db('perfis')
            .where({id: perfil.id})
            .first()
            .then(res => res.id)
        )
    }
    idUsuario = await db('usuarios')
                    .where({nome: usuario.nome})
                    .first()
                    .then(res => res.id)
    for (const id of idPerfil) {
        await db('usuario_perfil').insert({
            usuario_id: idUsuario,
            perfil_id: id
        })
    }
    return await db('usuario_perfil')
}

async function executar() {
    const usuario = await salvarUsuario('as',
        'ana@emparesa.com.br', '123456')
    const perfilA = await salvarPerfil('rh', 'Pessoal')
    const perfilB = await salvarPerfil('fin', 'Financeiro')

    console.log(usuario)
    console.log(perfilA)
    console.log(perfilB)

    console.log(await adicionarPerfis(usuario, perfilA, perfilB));
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())