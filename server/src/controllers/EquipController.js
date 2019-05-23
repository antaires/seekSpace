const {Equip} = require('../models')
const {Op} = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let equips = null
      const search = req.query.search
      // Check search 
      if (search) {
        // filter based on search, using ORs, so any matches are returned
        equip = await Equip.findAll({
          // $or -> [Op.or] and $like -> [Op.like]
          // create a map of all objects in database and search for matches containing the search
          where: {
            [Op.or]: [
              'name', 'risk', 'picture'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        // Show all
        equips = await Equip.findAll({
          limit: 10
        })
      }
      res.send(equips)
    } catch (err) {
      res.status(500).send({
        error: 'Error fetching equipment from journey'
      })
    }
  },
  async show (req, res) {
    try {
        const {placeId} = req.body
        const equipment = await Equip.findOne({
            where: {
                placeId: placeId
            }
        })
        res.send(equipment.toJSON)
        if (!equipment) {
            res.status(403).send({
                error: 'There is no matching equipment'
            })
        }
    } catch (err){
        res.status(500).send({
            error: 'Error fetching equipment from journey'
        })
    }

    /*
    try {
      const equip = await Equip.findById(req.params.placeId)
      res.send(equip)
    } catch (err) {
      res.status(500).send({
        error: 'Error fetching equipment from journey'
      })
    }*/
  },
  async post (req, res) {
    try {
      const equip = await Equip.create(req.body)
      res.send(equip)
    } catch (err) {
      res.status(500).send({
        error: 'Error creating an equipment from journey'
      })
    }
  },
  async put (req, res) {
    try {
      const equip = await Equip.update(req.body, {
        where: {
          id: req.params.equipId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Error updating an equipment from journey'
      })
    }
  }
}
