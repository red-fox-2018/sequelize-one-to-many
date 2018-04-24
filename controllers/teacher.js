'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.Teacher.findAll({
      include: [Model.Subject]
      ,order: [['id', 'ASC']]
      })
      .then(teachers => {
         callback(null, teachers);

      })
      .catch(err => {
        callback(err, null);

      })
  }

  static read_one(id, callback) {
    Model.Teacher.findOne({
        where: {
          id: id
        }
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(firstname, lastname,email,SubjectId,callback) {
    Model.Teacher.create({
        firstname,
        lastname,
        email,
        SubjectId
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, firstname, lastname, email,SubjectId, callback) {
    Model.Teacher.update({
        id,
        firstname,
        lastname,
        email,
        SubjectId
      }, {
        where: {
          id: id
        }
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, callback) {
    Model.Teacher.destroy({
      where: {
        id: id
      }
    })
    .then(teacher => {
      callback(null, teacher);
    })
    .catch(err => {
      callback(err, null);
    })
  }
}

module.exports = Controller;
