
const express = require('express')
const router = express.Router()
const { TeacherController } = require('./../controllers');

// @router GET /teacher
router.get('/', (req, res) => {
  TeacherController
    .getAll()
    .then(teachers => {
      // res.send(teachers);
      res.render('teacher/page-teacher-index', { teachers });
    }).catch(err => {
      console.log(err);
      res.redirect('/teacher');
    });
});

// @router GET /teacher/add
router.get('/add', (req, res) => {
  res.render('techer/page-teacher-add');
});

// @router POST /teacher/add
router.post('/add', (req, res) => {
  let values = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }
  TeacherController.insert(values)
    .then(() => {
      res.redirect('/teacher');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/teacher');
    })
});

// DELETE /teacher/delete/:id | GET
router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  TeacherController.delete(id)
    .then(() => {
      res.redirect('/teacher');
    })
    .catch(err => {
      res.redirect('./teacher');
      console.log(err.message);
    })
});

// UPDATE /teacher/update/:id | GET
router.get('/update/:id', (req, res) => {
  let id = req.params.id;
  TeacherController.findById(id)
    .then(teacher => {
      res.render('teacher/page-teacher-edit', { teacher });
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/teacher');
    });
});

router.post('/update/:id', (req, res) => {
  let id = req.params.id;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  TeacherController.update(id, { firstName, lastName, email })
    .then(() => {
      res.redirect('/teacher');
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/teacher');
    });
});

module.exports = router;