/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const app = require('express')();
const bodyParser = require('body-parser');
const port = 3000;

const indexRoutes = require('./routes');
const teachersRoutes = require('./routes/teacher');
const studentsRoutes = require('./routes/student');
const subjectsRoutes = require('./routes/subject');

// helper to default subject values
app.locals.defaultNull = require ('./helpers/defaultNullValue.js');


// Template Engine
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', indexRoutes);
app.use('/teachers', teachersRoutes);
app.use('/students', studentsRoutes);
app.use('/subjects', subjectsRoutes);


// -----------------------------------------------------------------------------
app.listen(port, console.log(`Listening on port ${port}`));
