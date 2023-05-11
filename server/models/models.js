const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Basket = sequelize.define('basket', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    starus: {type: DataTypes.STRING}
})

const Basket_game = sequelize.define('basket_game', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Game = sequelize.define('game', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    sale: {type: DataTypes.BOOLEAN, allowNull: false},
    disconst_price: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    people: {type: DataTypes.STRING, allowNull: false},
    time_play: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.STRING, allowNull: false},
})

const Descriptions = sequelize.define('descriptions', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description:{type: DataTypes.STRING, allowNull: false},
})
const Specifications = sequelize.define('specifications', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    specification:{type: DataTypes.STRING, allowNull: false},
})
const Rules = sequelize.define('rules', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rule:{type: DataTypes.STRING, allowNull: false},
})
const Question = sequelize.define('question', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    header:{type: DataTypes.STRING, allowNull: false, unique: true},
    text:{type: DataTypes.STRING, allowNull: false, unique: true}
})

const Categories = sequelize.define('categories', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category:{type: DataTypes.STRING, allowNull: false, unique: true},
})

const Orders = sequelize.define('orders', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    country:{type: DataTypes.STRING, allowNull: false},
    city:{type: DataTypes.STRING, allowNull: false},
    street:{type: DataTypes.STRING, allowNull: false},
    house:{type: DataTypes.STRING, allowNull: false},
    flat:{type: DataTypes.STRING, allowNull: false},
    delivery:{type: DataTypes.STRING, allowNull: false},
    payment_method:{type: DataTypes.STRING, allowNull: false},
    price:{type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Orders)
Orders.belongsTo(User)

Basket.hasMany(Basket_game)
Basket_game.belongsTo(Basket)

Basket.hasOne(Orders)
Orders.belongsTo(Basket)

Game.hasMany(Basket_game)
Basket_game.belongsTo(Game)

Descriptions.hasMany(Game)
Game.belongsTo(Descriptions)

Specifications.hasMany(Game)
Game.belongsTo(Specifications)

Rules.hasMany(Game)
Game.belongsTo(Rules)

Question.hasMany(Game)
Game.belongsTo(Question)

Categories.hasMany(Game)
Game.belongsTo(Categories)

module.exports = {
    User,
    Basket, 
    Basket_game,
    Orders,
    Game, 
    Categories, 
    Descriptions,
    Specifications,
    Rules,
    Question
}

