'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
     type: DataTypes.STRING,
     validate:{
      isEmail:{
        args: true,
        msg: 'email sudah pernah digunakan'
      },
      ifUnique:function(value,next){
       Student.find({
         where: {email: value}
       })
       .then(value => {
         if(value!==null){
           return next('errrrrrooorrrr');
         }
         else{
           next();
         }
       })
      }
     } 
    }
  }, {
    timestamps: false
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};