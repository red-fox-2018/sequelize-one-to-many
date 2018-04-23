var express = require('express')
var app = express()
let ejs = require('ejs')
var bodyParser = require('body-parser')
var teacherRoute= require("./routes/teacher-route")
var subjectRoute=require("./routes/subject-routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use("/t",teacherRoute)
app.use("/s",subjectRoute)

app.listen(9000)