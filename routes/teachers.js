const express = require('express');
const routes = express.Router()
const Controller_students = require('../controllers/controller');
const Model = require('../models');

routes.get('/', Controller_students.showAllTeachers)

routes.get('/add', Controller_students.getAddTeacher)
routes.post('/add', Controller_students.addTeachers)

routes.get('/edit/:id', Controller_students.getEditTeacher)
routes.post('/edit/:id', Controller_students.editTeacher)
//
routes.get('/delete/:id', Controller_students.deleteTeacher)

module.exports = routes;
