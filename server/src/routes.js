const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
    //a very simple endpoint to allow us to hit it
    //when email and passport sent to register, it sends back this message
    app.post('/register', 
        //envokes middlewear
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
}
