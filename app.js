const express = require('express')
const routes = require('./routes')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => console.log('app listening on port 3000!'))