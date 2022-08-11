const DCRoutes = require('Express').Router();
const {
    getAll,
    getByID,
    create,
    update,
    deleteElement } = require('./dc.controller');



DCRoutes.get('/', getAll);
DCRoutes.get('/:id', getByID);
DCRoutes.post('/', create)
DCRoutes.patch('/:id', update)
DCRoutes.delete('/:id', deleteElement)

module.exports = DCRoutes;