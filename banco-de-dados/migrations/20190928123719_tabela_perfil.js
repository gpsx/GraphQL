
exports.up = function(knex) {
    return knex.schema.createTable('perfis', table =>{
        table.increments('id').primary()
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
    }).then(function(){
        return knex('perfis').insert([
            { nome: 'comum', rotulo: 'comum'},
            { nome: 'troxa', rotulo: 'troxa'},
            { nome: 'admin', rotulo: 'admin'},
            { nome: 'serviçal', rotulo: 'serviçal'}
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfis')
};

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'