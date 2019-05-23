const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')
const session = require('express-session')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.disable('x-powered-by')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
	secret: 's3Cur3',
	name: 'sessionId'
}))

require('./routes')(app)

sequelize.sync({ force: false})
  .then(() => {
	  app.listen(config.port, 'localhost');
	  console.log(`server started on port ${config.port}`)
})