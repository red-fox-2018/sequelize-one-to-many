const routes = require('express').Router();
const Controller = require('../controllers/student');

// Show Data Student
routes.get('/', (req, res) => {
  Controller.read_all((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.render('students/student', {
        students: data
      })
    }
  })
})

// Add Student
routes.get('/add', (req, res) => {
  res.render('students/add-student')
})

routes.post('/add', (req, res) => {
  Controller.add(req.body.firstname, req.body.lastname, req.body.email, (err, data) => {
    if (!err) {
      res.redirect('/students');
    }
  })
})

// Edit Student
routes.get('/edit/:id', (req, res) => {
  Controller.read_one(req.params.id, (err, data) => {
    if (!err) {
      res.render('students/edit-student', {
        student: data
      })
    }
  })
})

routes.post('/edit/:id', (req, res) => {
  Controller.edit(req.params.id, req.body.firstname, req.body.lastname, req.body.email, (err, data) => {
    if (!err) {
      res.redirect('/students');
    }
  })
})

// Delete Student
routes.get('/delete/:id', (req, res) => {
  Controller.erase(req.params.id, (err, data) => {
    if(!err) {
      res.redirect('/students')
    }
  })
})

module.exports = routes;
