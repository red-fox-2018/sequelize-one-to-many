'use strict';
module.exports = (sequelize, DataTypes) => {
  var addSubjectColumn = sequelize.define('addSubjectColumn', {
    subject_name: DataTypes.STRING
  }, {});
  addSubjectColumn.associate = function(models) {
    // associations can be defined here
  };
  return addSubjectColumn;
};