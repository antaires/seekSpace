const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')
const session = require('express-session')
const https = require('https')
const fs = require('fs')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.disable('x-powered-by')
// for cookie security
app.set('trust proxy', 1) // trust first proxy
app.use(session({
	secret: 's3Cur3',
	name: 'sessionId'
}))
// for https / SSL
const sslOptions = {
  key: fs.readFileSync("./cert/server.key"),
  cert: fs.readFileSync("./cert/server.cer"),
};

require('./routes')(app)

app.get('/', function(req, res){
  res.send('hello secure world')
})

sequelize.sync({ force: false})
  .then(() => {
    https.createServer(sslOptions, app).listen(config.port, 'localhost')
	  //app.listen(config.port, 'localhost');
	  console.log(`server started on port ${config.port}`)
})
