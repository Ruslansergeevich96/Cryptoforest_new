const Router = require('express')
const router = new Router()
const cryptocurrenciesController = require('../controllers/cryptocurrenciesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), cryptocurrenciesController.create)
router.get('/', cryptocurrenciesController.getAll)
router.get('/:id', cryptocurrenciesController.getOne)


module.exports = router