const express        = require('express');
const bodyParser     = require('body-parser');
const dotenv         = require('dotenv');
const app            = express();
const cors           = require('cors')
const port           =  8000;

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./app/routes')(app)
app.listen(port, () => {
  console.log('We are live on ' + port)
})
 