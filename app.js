const express = require("express")
const app = express()
const routes = require('./routes')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.set('view engine','ejs')

app.use('/',routes)


app.listen(3000,function() {
	console.log("listening")
})