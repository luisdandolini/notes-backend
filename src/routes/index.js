const { Router } = require('express');

const usersRouter = require('./users.routes');
const notesRouter = require('./notes.routes');

const routes = Router();

// Users
routes.use('/users', usersRouter);

//Notes
routes.use('/notes', notesRouter);

module.exports = routes;