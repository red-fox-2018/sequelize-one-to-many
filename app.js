const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');

app.locals.showSubject = require('./helpers/showSubject');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//route index
var routeIndex = require('./routes');
app.use('/', routeIndex);

//route teachers
var routeTeachers = require('./routes/teacher');
app.use('/', routeTeachers)

//route students
var routeStudents = require('./routes/student');
app.use('/', routeStudents)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
