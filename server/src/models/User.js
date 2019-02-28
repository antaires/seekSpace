//user module
//custum logic and linking to easily update and add new users to file
//without updating somehwere else

//this is a function that takes sequelize and datatypes and
//and returns or defines a user model 
module.exports = (sequelize, DataTypes) => 
    sequelize.define('User',{
        //options or attributes attached to table
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        //seondd attribute
        password: DataTypes.STRING
    })


