'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };


  return Teacher;
};