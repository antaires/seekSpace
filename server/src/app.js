const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');
// security for headers
const helmet = require('helmet');
// node automatically sends HTTP, change to HTTPS for security
const https = require('https');
const fs = require('fs');
const options = {
	key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
	cert: fs.readFileSync("/srv/www/keys/chain.pem")
  };
  

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

require('./routes')(app)

sequelize.sync({ force: false})
  .then(() => {
	  app.listen(config.port, 'localhost');
	  https.createServer(options, app).listen(8080);
	  console.log(`server started on port ${config.port}`)
})