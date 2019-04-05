const {Place} = require('../models')
const {Op} = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let places = null
      const search = req.query.search
      // Check search 
      if (search) {
        // filter based on search, using ORs, so any matches are returned
        places = await Place.findAll({
          // $or -> [Op.or] and $like -> [Op.like]
          // create a map of all objects in database and search for matches containing the search
          where: {
            [Op.or]: [
              'name', 'feature', 'activity'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        // Show all
        places = await Place.findAll({
          limit: 10
        })
      }
      res.send(places)
    } catch (err) {
      res.status(500).send({
        error: 'Error fetching places from journey'
      })
    }
  },
  async show (req, res) {
    try {
      const place = await Place.findById(req.params.placeId)
      res.send(place)
    } catch (err) {
      res.status(500).send({
        error: 'Error fetching place from journey'
      })
    }
  },
  async post (req, res) {
    try {
      const place = await Place.create(req.body)
      res.send(place)
    } catch (err) {
      res.status(500).send({
        error: 'Error creating a place from journey'
      })
    }
  },
  async put (req, res) {
    try {
      const place = await Place.update(req.body, {
        where: {
          id: req.params.placeId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Error updating a place from journey'
      })
    }
  }
}
