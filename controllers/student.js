'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.Student.findAll({order: [['id', 'ASC']]})
      .then(students => {
        callback(null, students);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static read_one(id, callback) {
    Model.Student.findOne({
        where: {
          id: id
        }
      })
      .then(student => {
        callback(null, student);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(firstname, lastname, email, callback) {
    Model.Student.create({
        firstname,
        lastname,
        email
      })
      .then(student => {
        callback(null, student);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, firstname, lastname, email, callback) {
    Model.Student.update({
        firstname,
        lastname,
        email
      }, {
        where: {
          id: id
        }
      })
      .then(student => {
        callback(null, student);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, callback) {
    Model.Student.destroy({
      where: {
        id: id
      }
    })
    .then(student => {
      callback(null, student);
    })
    .catch(err => {
      callback(err, null);
    })
  }
}

module.exports = Controller;
