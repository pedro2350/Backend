const { Router } = require('express');

const personsRoutes = require('../../../modules/persons/infra/routes/persons.routes');

const routes = Router();

routes.use('/persons', personsRoutes);

//routes.use('/stconection');

//routes.use('/transactions');

module.exports = routes;

