'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Using format Email'
        },
        isUnique: function (value, next) {
          var self = this;
          Teacher.find({ where: { email: value } })
            .then(function (user) {
              if (user && self.id !== user.id) {
                return next('Email already in use!');
              }
              return next();
            })
            .catch(function (err) {
              return next(err);
            });
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function (models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};