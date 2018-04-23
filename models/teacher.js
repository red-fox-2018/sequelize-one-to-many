'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'email is invalid'
        },
        isUnique: function (email, callback) {
          Teacher.findOne({ where: { email: email } })
            .then(notAvailable=>{
            if (notAvailable) {
              callback('email already registered')
            }
            else {
              callback()
            }
          })
        }
      }
    },
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, { foreignKey: 'subjectId' })
  };
  return Teacher;
};