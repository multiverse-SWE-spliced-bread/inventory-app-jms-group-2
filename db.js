const { Sequelize, DataTypes, } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:  ('db.sqlite'),
    logging: false
});

module.exports = {sequelize}