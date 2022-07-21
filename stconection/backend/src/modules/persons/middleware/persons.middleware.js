const PersonsRepository = require('../repositories/PersonsRepository');

const personsRepository = new PersonsRepository();

module.exports = {
    verifyPayloadForCreation(request, response, next) {
        const { name, email, password} = request.body;

        if (!name) {
            throw new Error('Name not found');
        }

        if (!email) {
            throw new Error('email not found');
        }
        
        if (!password) {
            throw new Error('Password not found');
        }

        next();
    },

    async verifyPayloadForCreation(request, response, next) {
        const { email } = request.body;

        const emailExists = await personsRepository.checkPersonEmail(email);

        if (!emailExists) throw new Error('Email already exists');

        next();
    },
};

