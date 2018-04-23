const routes = require('express').Router();
const Controller = require('../controllers/subject');

// Show Data Subject
routes.get('/', (req, res) => {
  Controller.read_all((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.render('subjects/subject', {
        subjects: data
      })
    }
  })
})

// Add Subject
routes.get('/add', (req, res) => {
  res.render('subjects/add-subject')
})

routes.post('/add', (req, res) => {
  Controller.add(req.body.subject_name, (err, data) => {
    if (!err) {
      res.redirect('/subjects');
    }
  })
})

// Edit Subject
routes.get('/edit/:id', (req, res) => {
  Controller.read_one(req.params.id, (err, data) => {
    if (!err) {
      res.render('subjects/edit-subject', {
        subject: data
      })
    }
  })
})

routes.post('/edit/:id', (req, res) => {
  Controller.edit(req.params.id, req.body.subject_name, (err, data) => {
    if (!err) {
      res.redirect('/subjects');
    }
  })
})

// Delete Student
routes.get('/delete/:id', (req, res) => {
  Controller.erase(req.params.id, (err, data) => {
    if(!err) {
      res.redirect('/subjects')
    }
  })
})

module.exports = routes;