//define a web app
console.log('hello');

//dives into node_modules folder, and get main files and includes it here
//puts whatever it exports into this file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

//build up an express app (this builds a basic web app server)
const app = express();
//want to enable some of the packages to hit our backend easily 
app.use(morgan('combined'));
//allow express app to easily parse json 
app.use(bodyParser.json());
//cors allows any host/client to access this -- need it for
//server to be hosted from a diff. domain to let anyone, anywhere access it
//WARNING having cors enabled is a security risk that needs to be dealt with
app.use(cors()); 

//access the routes.js, attaching app to it
require('./routes')(app);

//connect sequelize to the databse it is configured for
sequelize.sync()
    .then(() => {
        //allows us to overwrite the given port with environment variables
        // app.listen(process.env.PORT || 8081); 

        //this will access the config.js file to spin up server
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`);
    })