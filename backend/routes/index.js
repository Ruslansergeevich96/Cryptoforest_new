const Router = require('express')
const router = new Router()
const tracking_cryptocurrenciesRouter = require('./tracking_cryptocurrenciesRouter')
const cryptocurrenciesRouter = require('./cryptocurrenciesRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/tracking_cryptocurrencies', tracking_cryptocurrenciesRouter)
router.use('/cryptocurrencies', cryptocurrenciesRouter)

module.exports = router