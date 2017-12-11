const express        = require('express');
const bodyParser     = require('body-parser');
const cors           = require('cors');
const dotenv         = require('dotenv')
const app            = express();

const port           =  8000;

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

require('./app/routes')(app)
app.listen(port, () => {
  console.log('We are live on ' + port)
})
