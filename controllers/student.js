/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const {
   Student
} = require('../models');

class StudentController {

   static index(req, res) {
      Student
         .findAll({
            order: [
               ['id', 'ASC']
            ]
         })
         .then(students => {
            res.render('students/index', {
               students
            });
         });
   }

   static add(req, res) {
      Student
         .findAll({
            order: [
               ['id', 'ASC']
            ]
         })
         .then(students => {
            res.render('students/add', {
               students
            });
         });
   }

   static create(req, res) {
      Student
         .create(req.body)
         .then(result => {
            res.redirect('/students');
         }).catch((err) => {
            Student
               .findAll()
               .then(students => {
                  res.render('students/add', {
                     students,
                     err
                  });
               });
         });
   }

   static edit(req, res) {
      Student
         .findById(req.params.id)
         .then(student => {
            res.render('students/edit', {
               student
            });
         });
   }

   static update(req, res) {
      Student
         .update(req.body, {
            where: {
               id: req.params.id
            }
         })
         .then(result => {
            res.redirect('/students');
         }).catch((err) => {
            Student
               .findAll()
               .then(students => {
                  res.render('students/add', {
                     students,
                     err
                  });
               });
         });
   }

   static delete(req, res) {
      Student
         .findById(
            req.params.id
         )
         .then(student => {
            res.render('students/delete', {
               student
            });
         });
   }

   static destroy(req, res) {
      Student
         .destroy({
            where: {
               id: req.params.id
            }
         })
         .then(result => {
            res.redirect('/students');
         });
   }
}

module.exports = StudentController;
