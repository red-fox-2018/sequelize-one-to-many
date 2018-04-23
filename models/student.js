'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:  {
      type : DataTypes.STRING,
      validate : {
        isEmail: {
          msg: "wrong format email"
        },
        notEmpty: {
          msg: 'Email not null'
        },
        isUnique: function(value, next){

          Student.findOne({
            where : {
              email:value,
              id:{[Op.ne]: this.id}
            }
          }).then(function(result){
            if(result === null){

              return next()

            }else{
              return next(' Email already use')
            }
          }).catch(err =>{
              return next()
          })
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
