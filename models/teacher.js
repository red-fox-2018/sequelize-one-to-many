'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format is incorrect'
        },
        isUnique(value, next) {
          let kondisi = {
            email: value
          }
          if (this.id != null) {
            kondisi = {
              email: value,
              id: {
                [Op.ne]: this.id
              }
            }
          }
          sequelize.models.Teacher.findOne({
              where: kondisi
            })
            .then(emailInput => {
              if (emailInput) {
                next('Email is already exist');
              } else {
                next()
              }
            })
            .catch(err => {
              next(err);
            })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function (models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject);
  };
  return Teacher;
};
