const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const db = new Sequelize({
    dialect: 'sqlite',
    storage:  ('./db.sqlite'),
    logging: false
})

const Items = db.define('items',{
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



module.exports = { Items, db }