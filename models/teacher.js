/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';
module.exports = (sequelize, DataTypes) => {
   var Teacher = sequelize.define('Teacher', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: {
         type: DataTypes.STRING,
         validate: {
            isEmail: {
               args: true,
               msg: 'Wrong email format!'
            },
            isUnique: function(value, next) {
               Teacher.find({
                     where: {
                        email: value
                     },
                     attributes: ['id']
                  })
                  .then(function(error, user) {
                     if (error || user)
                        return next('Email address already in use!');
                     next();
                  }).catch(function(err) {
                     return next(err);
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
      },
      SubjectId: DataTypes.INTEGER
   }, {});
   Teacher.associate = function(models) {
      // associations can be defined here
      Teacher.belongsTo(models.Subject);
   };

   Teacher.prototype.getTitle = function() {
      if (this.gender == 'male') {
         return `Mr. ${this.first_name} ${this.last_name}`;
      } else if (this.gender == 'female') {
         return `Mrs. ${this.first_name} ${this.last_name}`;
      }
   };

   return Teacher;
};
