'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.Subject.findAll({order: [['id', 'ASC']]})
      .then(subjects => {
        callback(null, subjects);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static read_one(id, callback) {
    Model.Subject.findOne({
        where: {
          id: id
        }
      })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(SubjectName, callback) {
    Model.Subject.create({
        SubjectName
      })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, SubjectName, callback) {
    Model.Subject.update({
        SubjectName
      }, {
        where: {
          id: id
        }
      })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, callback) {
    Model.Subject.destroy({
      where: {
        id: id
      }
    })
    .then(subject => {
      callback(null, subject);
    })
    .catch(err => {
      callback(err, null);
    })
  }
}

module.exports = Controller;
