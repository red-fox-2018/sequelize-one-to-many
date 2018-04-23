'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          args: true,
          msg: 'Email format : example@mail.com'
        }
        // isUnique: function(newEmail, next){
        //   Teacher.findOne({
        //     where:{
        //       email: newEmail
        //     }
        //   })
        //   .then(email => {
        //     if(email){
        //       next('email already use')
        //     }else{
        //       next()
        //     }
        //   })
        //   .catch( err => {
        //     next(err)
        //   })
        // }
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
