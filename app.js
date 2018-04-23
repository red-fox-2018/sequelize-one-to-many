const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs')
const subjects = require('./routes/subjects'); 
const teachers = require('./routes/teachers'); 

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))

app.use('/teachers', teachers);
app.use('/subjects', subjects);

app.listen(3000)