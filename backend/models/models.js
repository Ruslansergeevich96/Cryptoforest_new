const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Tracking = sequelize.define('tracking', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Tracking_cryptocurrencies = sequelize.define('tracking_cryptocurrencies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Cryptocurrencies = sequelize.define('cryptocurrencies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Buy = sequelize.define('buy', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number_coins: {type: DataTypes.INTEGER},
    money: {type: DataTypes.INTEGER},
    purchase_price: {type: DataTypes.INTEGER},
})

const Sale = sequelize.define('sale', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    commit_date: {type: DataTypes.INTEGER},
    cost_per_unit: {type: DataTypes.INTEGER},
    percentage_profit: {type: DataTypes.INTEGER},
    money: {type: DataTypes.INTEGER},
    discount: {type: DataTypes.INTEGER},
})

const Profit = sequelize.define('profit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    profit: {type: DataTypes.INTEGER},
    total_cost: {type: DataTypes.INTEGER},
    percentage: {type: DataTypes.INTEGER},
    rx: {type: DataTypes.INTEGER},
})

User.hasOne(Tracking)
Tracking.belongsTo(User)

Tracking.hasMany(Tracking_cryptocurrencies)
Tracking_cryptocurrencies.belongsTo(Tracking)

Tracking_cryptocurrencies.hasOne(Cryptocurrencies)
Cryptocurrencies.belongsTo(Tracking_cryptocurrencies)

Buy.hasOne(Tracking_cryptocurrencies)
Tracking_cryptocurrencies.belongsTo(Buy)

Buy.hasOne(Sale)
Sale.belongsTo(Buy)

Buy.hasOne(Profit)
Profit.belongsTo(Buy)

Sale.hasOne(Tracking_cryptocurrencies)
Tracking_cryptocurrencies.belongsTo(Sale)

Sale.hasOne(Profit)
Profit.belongsTo(Sale)

Profit.hasOne(Tracking_cryptocurrencies)
Tracking_cryptocurrencies.belongsTo(Sale)

module.exports = {
    User,
    Tracking,
    Tracking_cryptocurrencies,
    Cryptocurrencies,
    Buy,
    Sale,
    Profit
}