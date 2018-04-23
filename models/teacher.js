'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type :DataTypes.STRING,
      validate:{
        isEmail :{
          args: true,
          msg: 'Email format is incorrect'
        },
        isUnique: function(email,callback){
          Teacher.findOne(
            {
              where: {email:email}
            }
          )
          .then(function(notFound){
            if(notFound){
              callback(`Email tidak boleh duplikat`)
            }else{
              callback()
            }
          })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};