const Router = require('express')
const router = new Router()
const tracking_cryptocurrenciesController = require ('../controllers/tracking_cryptocurrenciesController')

router.post('/', tracking_cryptocurrenciesController.create) 
router.get('/', tracking_cryptocurrenciesController.getAll)
router.get('/:id', tracking_cryptocurrenciesController.getOne)

module.exports = router