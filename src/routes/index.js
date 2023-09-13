const { Router } = require('express');

const usersRouter = require('./users.routes');
const notesRouter = require('./notes.routes');
const tagsRouter = require('./tags.routes');
const sessionsRouter = require('./sessions.routes');

const routes = Router();

// Users
routes.use('/users', usersRouter);

//Notes
routes.use('/notes', notesRouter);

//Tags
routes.use('/tags', tagsRouter);

// Session
routes.use('/sessions', sessionsRouter);

module.exports = routes;