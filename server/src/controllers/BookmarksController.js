
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
        error: 'Error fetching bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {placeId, userId} = req.body

      // Check if bookmark exists in databse
      const bookmark = await Bookmark.findOne({
        where: {
          PlaceId: placeId,
          UserId: userId
        }
      })
      // If bookmark exists already...
      if (bookmark) {
        return res.status(400).send({
          error: 'already bookmarked'
        })
      }
      // Assoicate bookmark with placeId and userId
      const newBookmark = await Bookmark.create({
        PlaceId: placeId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Error creating bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      // Delete the bookmark from database
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Error deleting bookmark'
      })
    }
  }
}
