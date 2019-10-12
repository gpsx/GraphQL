const db = require('../../config/db')

module.exports = {
    async perfis(usuario) {
        return db('perfis')
        .join(
            'usuarios_perfis',
            'perfis.id', 
            'usuarios_perfis.perfil_id')
        .where({ usuario_id: usuario.id })      
    }
}
// select `users`.`id`, `contacts`.`phone` from `users` inner join `contacts` on `users`.`id` = `contacts`.`user_id`