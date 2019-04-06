const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
      database: process.env.DB_NAME || 'website-test',
      user: process.env.DB_USER || 'website-test',
      password: process.env.DB_PASS || 'website-test',
      options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname, '../../website-test.sqlite')
      }
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
