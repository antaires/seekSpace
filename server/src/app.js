const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');
// security for headers
//const helmet = require('helmet');
  
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
//app.use(helmet());

require('./routes')(app)

sequelize.sync({ force: false})
  .then(() => {
	  app.listen(config.port, 'localhost');
	  https.createServer(options, app).listen(8080);
	  console.log(`server started on port ${config.port}`)
})