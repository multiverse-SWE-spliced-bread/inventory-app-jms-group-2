//This is a snippet for populating the database with seed data.

const {sauces, items} = require('./seedData.js');

const {db, Items} = require('../database/db');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
       await db.sync({ force: true });
   
//         // insert data
       await Promise.all(items.map(item => Items.create(item)));

       console.log("db populated!");
   } catch (error) {
        console.error(error);
    }
}

seed();
