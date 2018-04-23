const express = require('express');
const routes = express.Router()
const Controller_students = require('../controllers/controller');
const Model = require('../models');

routes.get('/', Controller_students.showAllSubjects)

routes.get('/add', Controller_students.getAddSubject)
routes.post('/add', Controller_students.addSubject)

routes.get('/edit/:id', Controller_students.getEditSubject)
routes.post('/edit/:id', Controller_students.editSubject)
//
routes.get('/delete/:id', Controller_students.deleteSubject)

module.exports = routes;
