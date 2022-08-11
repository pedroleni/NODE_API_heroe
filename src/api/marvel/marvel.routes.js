const MarvelRoutes = require('Express').Router();
const {
    getAll,
    getByID,
    create,
    update,
    deleteElement } = require('./marvel.controller');



MarvelRoutes.get('/', getAll);
MarvelRoutes.get('/:id', getByID);
MarvelRoutes.post('/', create)
MarvelRoutes.patch('/:id', update)
MarvelRoutes.delete('/:id', deleteElement)

module.exports = MarvelRoutes;