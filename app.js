const express = require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
  extended: false
}))
app.set('view engine', 'ejs')

let teacherRoutes = require('./routes/teacher.js')
app.use('/teachers', teacherRoutes)

app.listen(3000,function(){
    console.log('listening to post 3000'); 
})