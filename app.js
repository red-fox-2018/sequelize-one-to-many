const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine','ejs');

const routeIndex = require('./routes/index')
const routeTeacher = require('./routes/teacher')

app.use('/', routeIndex)
app.use('/teachers', routeTeacher)

app.listen(3000)