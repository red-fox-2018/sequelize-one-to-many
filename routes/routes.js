const express = require('express');
const routes = express.Router()
const Controller_students = require('../controllers/controller');
const Model = require('../models');

// students
// routes.get('/students', Controller_students.showAllStudents)
//
// routes.get('/students/add', Controller_students.getAddStudent)
// routes.post('/students/add', Controller_students.addStudents)
//
// routes.get('/students/edit/:id', Controller_students.getEditStudent)
// routes.post('/students/edit/', Controller_students.editStudents)
//
// routes.get('/students/delete/:id', Controller_students.deleteStudent)



// routes.get('/teachers/', Controller_students.showAllTeachers)
//
// routes.get('/teachers/add', Controller_students.getAddTeacher)
// routes.post('/teachers/add', Controller_students.addTeachers)
//
// routes.get('/teachers/edit/:id', Controller_students.getEditTeacher)
// routes.post('/teachers/edit/:id', Controller_students.editTeacher)
// //
// routes.get('/teachers/delete/:id', Controller_students.deleteTeacher)

// subject
// routes.get('/subject', Controller_students.showAllSubjects)
//
// routes.get('/subject/add', Controller_students.getAddSubject)
// routes.post('/subject/add', Controller_students.addSubject)
//
// routes.get('/subject/edit/:id', Controller_students.getEditSubject)
// routes.post('/subject/edit/', Controller_students.editSubject)
// //
// routes.get('/subject/delete/:id', Controller_students.deleteSubject)


module.exports = routes;
