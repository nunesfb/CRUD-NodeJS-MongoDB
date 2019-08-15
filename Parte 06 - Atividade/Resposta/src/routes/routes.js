const express = require ('express');
const routes = express.Router();

const humanoController = require("../controllers/humanoController.js");

routes.get('/humano', humanoController.index);
routes.get('/humano/:id', humanoController.details);
routes.post('/humano', humanoController.insert);
routes.put('/humano/:id', humanoController.update);
routes.delete('/humano/:id', humanoController.delete);

module.exports = routes;