const connection = require('../../../shared/database/migrations/connection');

class PersonsRepository {
    async checkPersonEmail (email) {
        return connection ('persons').where({ email })
    }

    async checkPerson(payload) {
        return connection.transation(async trx =>
            trx('persons').insert(payload).returning('id')
            );
    }
}

module.exports = PersonsRepository;