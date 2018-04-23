'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Teachers',[
     {
       first_name: 'Bambang',
       last_name: 'Suprapto',
       email: 'bambangsuprapto@sekolah.id',
       subjectId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       first_name: 'Rukmana',
       last_name: 'Fatmawati',
       email: 'rukmanafatmawati@sekolah.id',
       subjectId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       first_name: 'Bulet',
       last_name: 'Naiborhu',
       email: 'butetnaiborhu@sekolah.id',
       subjectId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       first_name: 'Yulius',
       last_name: 'Prawiranegara',
       email: 'yuliusprawiranegara@sekolah.id',
       subjectId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
