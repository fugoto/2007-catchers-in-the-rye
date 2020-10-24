const router = require('express').Router()
const { Costume } = require('../db')

router.get('/', async(req, res, next) => {
    try {
        const costumes = await Costume.findAll()
        res.send(costumes)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const costume = await Costume.findByPk(req.params.id)
        res.send(costume)
    } catch(err) {
        next(err)
    }
})

module.exports = router