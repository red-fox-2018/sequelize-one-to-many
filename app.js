const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const teacher = require('./routes/teacher')
const subject = require('./routes/subject')

app.use(bodyParser.urlencoded({ extended:false }))
app.set('view engine', 'ejs')

app.get('/',function(req,res){
    res.redirect('/teachers')
})

app.use('/',teacher)
app.use('/', subject)

app.listen(3000)