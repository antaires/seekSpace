const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

async function hashPassword (user, options) {
  if (!user.changed('password')) {
    return 0
  }
  const SALT_FACTOR = 8
  await bcrypt.hash(user.password, SALT_FACTOR, (err, hash) => {
    if (err) {
      console.log(err)
    }
    // user.setDataValue('password', hash)
    user.password = hash
    console.log(user)
  })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    admin: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: hashPassword,
      beforeCreate: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    bcrypt.compare(password, this.password, function (res, err) {
      if (res) {
        console.log(res)
      } else {
        console.log(err)
      }
    })
    return bcrypt.compare(password, this.password)
  }

  return User
}
