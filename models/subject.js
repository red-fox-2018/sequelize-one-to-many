'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});

  //CLASS METHOD
  Subject.getIdByName = function (name, cb) {
      this.findOne({where: {name: name}})
      .then((subject) => {
        cb(subject.id);
      })
  }

  //INSTANCE METHOD
  // Subject.prototype.getIdByName = function (name) {
  // };

  return Subject;
};
