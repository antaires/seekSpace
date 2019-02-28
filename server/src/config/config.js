module.exports = {

    //allows us to override as needed
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'seekSpace',
        user: process.env.DB_USER || 'seekSpace',
        password: process.env.DV_PASS || 'seekSpace',
        options: {
            //tell sequelize what kind of db we're conecting to
            dialect: process.env.DIALECT || 'sqlite',
            //specifiy location of db connecting to
            host: process.env.HOST || 'localhost',
            //specify where to store sequelite files
            storage: './seekSpace.sqlite',
            operatorsAliases: false
        }
    }
}
