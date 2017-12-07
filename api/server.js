const express        = require('express')
// const MongoClient    = require('mongodb').MongoClient
const bodyParser     = require('body-parser')
const db             = require('./config/db')
const cors           = require('cors')
const dotenv         = require('dotenv')
const app            = express()

const port           =  8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
dotenv.config()

app.listen(port, () => {
  console.log('We are live on ' + port)
});               

// MongoClient.connect(db.url, (err, database) => {
//     if (err) return console.log(err)
//     require('./app/routes')(app, database);
//   })