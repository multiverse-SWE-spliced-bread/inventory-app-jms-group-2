const sequelize = require('sequelize')
const { Sequelize, DataTypes } = require ('sequelize')
const { seedData } = require ('./seedData/seedData')


const Items = sequelize.define ('item',{
    title: {
        type: DataTypes.INTEGER,
    
    },
    description: {
        type: DataTypes.STRING,

    },
    price: {
        type: DataTypes.INTEGER,

    },
    category: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING
    }

})


module.exports = { Items }