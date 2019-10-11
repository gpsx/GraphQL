const db = require('../../config/db')

module.exports = {
    async usuarios() {
       return db('usuarios')
    },
    async games(){
        return db('APPS').where({APP_IS_FREE: 1})
    },
    async usuario(_, { filtro }) {
        if (!filtro) return null 
        const { id, email } = filtro
        if (id) {
            return db('usuarios').where({ id }).first()
        }else if(email){
            return db('usuarios').where({ email }).first()
        }else{
            return null
        }
    },
}