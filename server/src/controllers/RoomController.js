const {Room} = require('../models')

module.exports = {

  async index (req, res) {
    try {
      const rooms = await Room.findAll({
      })
      res.send(rooms)
    } catch (err) {
      res.status(500).send({
        error: 'Error indexing rooms'
      })
    }
  },

  async post (req, res) {
    try {
      const room = await Room.create(req.body)
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'Error posting rooms'
      })
    }
  }
}
