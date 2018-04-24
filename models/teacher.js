'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {args: true, msg: `wrong email format!`},
        isUnique: function (value, next){
          Teacher.findOne({
            where: {email: value},
          })
          .then(email =>{
            if(email){
              next('email already taken!')
            }
          })
          .catch(error =>{
            next(err)
          })
        }
      }
    },
    subject: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject, {
      foreignKey: 'SubjectId'
    })
  };
  return Teacher;
};