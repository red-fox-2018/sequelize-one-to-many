const express = require('express');
const routes = express.Router()
const Controller_students = require('../controllers/controller');
const Model = require('../models');

routes.get('/', Controller_students.showAllStudents)

routes.get('/add', Controller_students.getAddStudent)
routes.post('/add', Controller_students.addStudents)

routes.get('/edit/:id', Controller_students.getEditStudent)
routes.post('/edit/:id', Controller_students.editStudents)

routes.get('/delete/:id', Controller_students.deleteStudent)

module.exports = routes;
