const { db, DataTypes } = require('./')

const Items = db.define('items',{
    title: {
        type: DataTypes.STRING,
    
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

module.exports = Items