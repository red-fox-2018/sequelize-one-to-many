const express = require('express');
const app = express();
const teacher = require('./router/teacher');
const subject = require('./router/subject');

app.set('view engine', 'ejs');

app.use('/', teacher);
app.use('/teachers', teacher);
app.use('/teachers/add', teacher);


app.listen(3000);
