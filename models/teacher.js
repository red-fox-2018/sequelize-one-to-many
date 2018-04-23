'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail: {
          msg: "wrong format email"
        },
        notEmpty: {
          msg: 'Email not null'
        },
        isUnique: function(value, next){

          Teacher.findOne({
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
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
