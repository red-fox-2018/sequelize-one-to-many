'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
         first_name: 'Bambang',
         last_name: 'Suprapto',
         email: 'bambangsuprapto@sekolah.id',
         subject_id: 3,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         first_name: 'Rukmana',
         last_name: 'Fatmawati',
         email: 'rukmanafatmawati@sekolah.id',
         subject_id: 2,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         first_name: 'Bulet',
         last_name: 'Naiborhu',
         email: 'butetnaiborhu@sekolah.id',
         subject_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         first_name: 'Yulius',
         last_name: 'Prawiranegara',
         email: 'yuliusprawiranegara@sekolah.id',
         subject_id:4,
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
