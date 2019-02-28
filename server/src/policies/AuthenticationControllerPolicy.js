//express middlewear for authentication

const Joi = require('joi');

module.exports = {
   register (req, res, next) {
        //set constraints for emails
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        //use schema we defined above
        const {error, value} = Joi.validate(req.body, schema);
        if (error){
            //need to figure out which validation failed
            switch(error.details[0].context.key){
                case 'email': 
                    res.status(400).send({
                        error:'You must provide a valid email address'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                      error:'Password may contain ONLY letters and numbers and be between 8-32 characters in length'
                    })
                    break;
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            //moves to next line in routes
            next();
        }
   } 
}