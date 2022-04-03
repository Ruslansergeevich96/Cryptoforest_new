const {Buy} = require('../models/models')
const ApiError = require('../error/ApiError')

class buyController {
    async create(req, res) {
        const {number_coins, money, purchase_price} = req.body
        const Buy = await Buy.create ({number_coins, money, purchase_price})
        return res.json(Buy)
    }

    async getAll(req, res) {
        
    }

}

module.exports = new buyController()