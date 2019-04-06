// script to populate database
const {
  sequelize,
  Place,
  User
} = require('../src/models')

const Promise = require('bluebird')
const places = require('./places.json')
const users = require('./users.json')

// clear database
sequelize.sync({ force: true})
  .then(async function () {
	  // Promise to finish adding all users and places before taking further action
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      places.map(place => {
        Place.create(place)
      })
    )
  })