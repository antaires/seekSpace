// script to populate database
const {
  sequelize,
  Place,
  User,
  Equip,
  Alien,
  Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const places = require('./places.json')
const users = require('./users.json')
const equips = require('./equips.json')
const aliens = require('./aliens.json')
const bookmarks = require('./bookmarks.json')

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

    await Promise.all(
      aliens.map(alien => {
        Alien.create(alien)
      })
    )

    await Promise.all(
      equips.map(equip => {
        Equip.create(equip)
      })
    )

    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
  })