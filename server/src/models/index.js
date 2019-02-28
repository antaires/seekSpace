
//fs to read through file system
const fs = require('fs');
//dealing with paths, aboslute/relative
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
//database object to later export
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
);

//read through all the models in models folder
//and set them up to be read in sequelize
//. readdir read through current directory and give list of files
//.filter filter out index.js file (want all others)
fs  
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import (path.join(__dirname, file))   
        db[model.name] = model
    })

//declare some usefule variables on obejct 
//can access these objects now in code
db.sequelize = sequelize;
db.Sequelize = Sequelize; 

module.exports = db;