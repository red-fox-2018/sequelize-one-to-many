const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.locals.check_subject = require('./helpers/helper.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const router = require('./routes/routes');
const routerStudents = require('./routes/students');
const routerTeachers = require('./routes/teachers');
const routerSubjects = require('./routes/subjects');

app.use('/', router)
app.use('/students', routerStudents)
app.use('/teachers', routerTeachers)
app.use('/subjects', routerSubjects)

app.listen(3000)
