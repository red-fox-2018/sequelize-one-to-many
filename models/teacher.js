'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        isUnique:function(inputEmail,next){
          Teacher.find({where:{
            email:inputEmail
          }})
          .then(teacherEmail=>{
            if(teacherEmail==null){
              next()
            }
            else{
              return next("udah ada")
            }
          })
        }
      },
    //defaultnya nyari yang huruf depannya huruf Gede
    //trus ada Id nya I nya huruf gede jg 
    SubjectId:{
      type:DataTypes.INTEGER
      }
    }
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};