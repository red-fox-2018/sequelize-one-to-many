const fs = require('fs');
const express = require('express')
const router = express()
const Model = require('./../models');

//=========== Home ================
router.get('/', function(req, res) {
  res.render('home', {
    data: 'Welcome to Hacktiv8!'
  })
})

//============== find all teacher==============
router.get('/teachers', function(req, res) {
  Model.Teacher.findAll({
    include: [{
      model: Model.Subject
    }]
  }).then(teachersData => {
    // console.log('======>',teachersData);
    // res.send(teachersData);
    res.render('teachers', {
      teachers: teachersData
    })
  })
})

//=================add teacher ===============

router.get('/teachers/add', function(req, res) {
  res.render('form')
})

router.post('/teachers/add', function(req, res) {
  Model.Teacher.create({

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email

  }).then(function() {
    res.redirect('/teachers')
  })
  // .catch(function(){
  //   res.render('form',{msg:'format email salah'})
  // })
})

// ================= edit teacher =================
router.get('/teachers/edit/:id', function(req, res) {
  let teacherId = req.params.id
  Model.Teacher.findOne({
      where: {
        id: teacherId
      }
    })
    .then(function(dataIdTeacher) {
      res.render('edit', {
        dataIdTeacher
      })
    })

})

router.post('/teachers/edit/:id', function(req, res) {
  let editTeacherId = req.params.id;
  Model.Teacher.update({

      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email

    }, {
      where: {
        id: editTeacherId
      }
    })
    .then(function() {
      res.redirect('/teachers')
    })
})

//==============delete teacher===========
router.get('/teachers/delete/:id', function(req, res) {
      let deleteId = req.params.id;
      Model.Teacher.destroy({

          where: {
            id: deleteId

          }
        })

        .then(function() {
          res.redirect('/teachers')
        })
      })


    module.exports = router
