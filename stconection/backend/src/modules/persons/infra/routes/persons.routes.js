const { Router } = require('express');

const PersonsController = require('../controllers/PersonsController');

const {
    verifyPayloadForCreation,
    verifyIfEmailAlreadyExists,
} = require('../../middleware/persons.middleware');
const PersonsController = require('../controllers/PersonsController');

const personsRoutes = Router();
const PersonsController = new PersonsController();

personsRoutes.post(
    '/',
    verifyPayloadForCreation,
    verifyIfEmailAlreadyExists,
    PersonsController.createPersons
);

personsRoutes.get('/', personsController.getAllPersons);

personsRoutes.put('/', personsController.updatePersons);

personsRoutes.delete('/', personsController.deletePersons);

module.exports = personsRoutes;