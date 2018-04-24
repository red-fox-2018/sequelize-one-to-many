'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  //disini, satu subject punya banyak teacher
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher)
  };
  return Subject;
};



