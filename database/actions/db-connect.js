const knex = require('../mysql');

knex.raw('show schemas')
        .then(result => console.log(result))
        .catch(error => console.log(error))
