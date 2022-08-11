const HeroesDC = require ('./dc.model');
const {setError } = require('../../helpers/error');


const getAll =  async (req, res, next) => {
    try {
        const heroesDC = await HeroesDC.find();
        return  res.json({
            status:200,
            message: 'Recover all DC Heroes',
            data: { heroesDC }
        });

    }
    catch (error) {
        return next(setError(500, 'Failed Heroes All Recover'))

    }
}

const getByID = async ( req, res, next) => {
    try{
        const {id} = req.params; 
        const heroeDC = await HeroesDC.findById(id);
        if (!heroeDC) return next(setError(404, 'heroe no found'));
        return res.json({
            status:200,
            message:'Recover DC Heroes by ID',
            data: {heroeDC}

        });
      

    }
    catch (error) {
        return next(setError(500, 'Failed element'))

    }
}

//Definimos la función que nos permitirá crear un nuevo elemento
const create = async (req, res, next) => {
    try {
        const heroeDC = new HeroesDC(req.body)
        const heroesInBd = await heroeDC.save()
        return res.json({
            status: 201,
            message: 'Created new element',
            data: { heroeDC: heroesInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created element'))
    }
}

//Definimos la función que nos permitirá actualizar un elemento mediante su id
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const heroeDC = new HeroesDC(req.body)
        heroeDC._id = id;
        const updatedheroeDC = await HeroesDC.findByIdAndUpdate(id, heroeDC)
        if (!updatedheroeDC) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated element',
            data: {  heroeDC: updatedheroeDC }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated element'));
    }
}

//Definimos la función que nos permitirá borrar un elemento mediante su id
const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedheroeDC = await HeroesDC.findByIdAndDelete(id)
        if (!deletedheroeDC) return next(setError(404, 'Element not found'))
        return res.json({
            status: 200,
            message: 'deleted element',
            data: { heroeDC: deletedheroeDC }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted element'));
    }
}



module.exports = {
    getAll, 
    getByID,
    create,
    update,
    deleteElement
};