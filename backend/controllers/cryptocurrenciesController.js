const uuid = require('uuid')
const path = require ('path');
const {Cryptocurrencies} = require('../models/models')
const ApiError = require('../error/ApiError')

class CryptocurrenciesController {
    async create(req, res, next) {
        try{
            const {name, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const cryptocurrencies = await Cryptocurrencies.create({name, price, img: fileName})
            return res.json(cryptocurrencies)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {name} = req.query
        let cryptocurrencies;
        if (!name) {
            cryptocurrencies = await Cryptocurrencies.findAndCountAll()
        }
        if (name) {
            cryptocurrencies = await Cryptocurrencies.findAndCountAll({where: {name}})
        }
        
        return res.json(cryptocurrencies)
    }

    async getOne(req, res){
        
    }
}

module.exports = new CryptocurrenciesController()