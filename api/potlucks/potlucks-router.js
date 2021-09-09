const router = require("express").Router();
const Potlucks = require("./potlucks-model");
const { restricted } = require("../auth/auth-middleware.js");
const { validatePotluck, uniqueName } = require('./potlucks-middleware')

router.get('/', restricted, (req, res, next) => {
    Potlucks.getPotlucks()
        .then(potlucks => {
            res.status(200).json(potlucks)
        })
        .catch(next)
})

router.get('/:id', restricted, (req, res, next) => {
    Potlucks.getPotlucksById(req.params.id)
        .then(potluck => {
            console.log("POTLUCK", potluck)
            res.status(200).json(potluck)
        })
        .catch(next)
})

router.get('/:id/users', restricted, (req, res, next) => {
    Potlucks.getPotluckUsers(req.params.id)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.get('/:id/foods', restricted, (req, res, next) => {
    Potlucks.getPotluckFoods(req.params.id) 
        .then(foods => {
            res.status(200).json(foods)
        })
        .catch(next)
})

router.post('/:id/users', restricted, (req, res, next) => {
    Potlucks.addUserToPotluck(req.params.id, req.body)
        .then(users => {
            res.status(201).json(users)
        })
        .catch(next)
})

router.post('/:id/foods', restricted, (req, res, next) => {
    Potlucks.addFoodToPotluck(req.params.id, req.body)
        .then(foods => {
            res.status(201).json(foods)
        })
        .catch(next)
})

router.delete('/:id/foods', restricted, (req, res, next) => {
    Potlucks.removeFoodFromPotluck(req.params.id, req.params.food_id)
        .then(newList => {
            res.status(200).json(newList)
        })
        .catch(next)
})

router.post(
    '/', 
    restricted, 
    validatePotluck, 
    uniqueName, 
    (req, res, next) => {
        Potlucks.createPotluck(req.potluck)
            .then(newPotluck => {
                res.status(201).json(newPotluck)
            })
            .catch(next)
})

router.put('/:id', restricted, validatePotluck, (req, res, next) => {
    Potlucks.editPotluck(req.params.id, req.potluck)
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(next)
})

router.delete('/:id', restricted, (req, res, next) => {
    Potlucks.deletePotluck(req.params.id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(next)
})

module.exports = router