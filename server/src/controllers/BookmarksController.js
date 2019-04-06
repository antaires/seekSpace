
const{Bookmark} = require('../models')
// const {Place} = require('../models')
// const {Op} = require('sequelize')

// Returns bookmarked place if exists, else returns null
module.exports = {
  async index (req, res) {
    try {
      const {placeId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          PlaceId: placeId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Error bookmarking place'
      })
    }
  }
}
