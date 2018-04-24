const express = require('express');
const app = express()
const router = require('./routes');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


let ejs = require('ejs')
app.set('view engine', 'ejs')
app.set('views', '/views')

app.use('/', router);

app.listen(3000)
