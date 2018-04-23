'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function (value, next) {
          Teacher.findOne({
            where: {
              email: value
            }
          }).then((teacher) => {
            if (teacher) {
              return next('Email already used');
            } else {
              next()
            }
          })
        }
      }
    },
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, {foreignKey: 'subjectId'})
  };
  return Teacher;
};
