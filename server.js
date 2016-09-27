const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Bear = require('./lib/models/bear')
const database = require('./config/database.js')
const router = express.Router()
const port = process.env.PORT || 1337

mongoose.connect(database.url)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
router.get('/', function (req, res) {
  res.json({ message: 'welcome to api land' })
})

app.use('/api', router)
app.listen(port)
console.log('Listening at 1337..')
