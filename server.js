const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.listen(3000, () => console.log('RESTful blog api app listening on port 3000!'))
