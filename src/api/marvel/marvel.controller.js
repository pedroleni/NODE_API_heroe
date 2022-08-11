const HeroesMarvel = require ('./marvel.model');
const {setError } = require('../../helpers/error');


const getAll =  async (req, res, next) => {
    try {
        const heroesMarvel = await HeroesMarvel.find();
        return  res.json({
            status:200,
            message: 'Recover all MARVEL Heroes',
            data: { heroesMarvel }
        });

    }
    catch (error) {
        return next(setError(500, 'Failed Heroes All Recover'))

    }
}

const getByID = async ( req, res, next) => {
    try{
        const {id} = req.params; 
        const heroeMarvel = await HeroesMarvel.findById(id);
        if (!heroeMarvel) return next(setError(404, 'heroe no found'));
        return res.json({
            status:200,
            message:'Recover DC Heroes by ID',
            data: {heroeMarvel}

        });
      

    }
    catch (error) {
        return next(setError(500, 'Failed element'))

    }
}

//Definimos la función que nos permitirá crear un nuevo elemento
const create = async (req, res, next) => {
    try {
        const heroeMarvel = new HeroesMarvel(req.body)
        const heroesInBd = await heroeMarvel.save()
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
        const heroeMarvel = new HeroesMarvel(req.body)
        heroeMarvel._id = id;
        const updatedheroeMarvel = await HeroesMarvel.findByIdAndUpdate(id, heroeMarvel)
        if (!updatedheroeMarvel) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated element',
            data: {  heroeDC: updatedheroeMarvel }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated element'));
    }
}

//Definimos la función que nos permitirá borrar un elemento mediante su id
const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedheroeMarvel = await HeroesMarvel.findByIdAndDelete(id)
        if (!deletedheroeMarvel) return next(setError(404, 'Element not found'))
        return res.json({
            status: 200,
            message: 'deleted element',
            data: { heroeDC: deletedheroeMarvel }
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