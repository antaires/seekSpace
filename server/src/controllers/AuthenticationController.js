//want to create a new user endpoint and insert this into database
const {User} = require('../models');

//export whatever routes are associated with authentication
module.exports = {
    async register (req, res) {
        try {
        const user = await User.create(req.body);
        res.send(user.toJSON())
        } catch (err){
            res.status(400).send({
                error: 'Email account already in use.'
            })
        }
    }
}