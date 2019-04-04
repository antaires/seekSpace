const {Place} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const places = await Place.findAll({
        limit: 10
      })
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
  }
}
