/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';
module.exports = (sequelize, DataTypes) => {
   var Student = sequelize.define('Student', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.STRING,
      email: {
         type: DataTypes.STRING,
         validate: {
            isEmail: {
               args: true,
               msg: 'Wrong email format!'
            },
            isUnique: function(value, next) {
               Student.find({
                     where: {
                        email: value
                     },
                     attributes: ['id']
                  })
                  .then(function(error, user) {
                     if (error || user)
                        return next('Email address already in use!');
                     next();
                  });
            }
         }
      },
      phone: {
         type: DataTypes.STRING,
         validate: {
            len: {
               args: [10, 13],
               msg: 'Phone length must be 10-13'
            },
            not: {
               args: ["[a-z][A-Z]", 'i'],
               msg: 'Phone not allow letters'
            }
         }
      }
   }, {});
   Student.associate = function(models) {
      // associations can be defined here
   };
   return Student;
};
