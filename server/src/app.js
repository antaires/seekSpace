//define a web app
console.log('hello');

//dives into node_modules folder, and get main files and includes it here
//puts whatever it exports into this file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

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

//a very simple endpoint to allow us to hit it
//when email and passport sent to register, it sends back this message
app.post('/register', (req, res) => {
    res.send({
        //use the far left ` (not single/double quotes)
        message: `Hello ${req.body.email} you have registered - have fun`
    });
});

//allows us to overwrite the given port with environment variables
app.listen(process.env.PORT || 8081); 