const db = require('../config/db')

const novoUsuario = {
    nome: 'pokaju',
    email: 'pokaju@jmail.com',
    senha: '111111211212'
}

//update: db('...').where('...').update('{...}')

async function exercicio() {
    const { qtde } = await db('usuarios')
        .count('* as qtde').first()
    
    if (qtde === 0) {
        await db('usuarios').insert(novoUsuario)
    }

    //consultar
    let { id } = await db('usuarios')
        .select('id')
        .limit(1).first()

    //alterar
    await db('usuarios')
        .where({ id })
        .update(
            {
                nome: 'korningho',
                email: 'asasas@awqw.com'
            }
        )

    return db('usuarios').where({ id })
}

exercicio()
    .then(user => console.log(user))
    .finally(() => db.destroy)