'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teachers', [{
                first_name: 'Bambang',
                last_name: 'Suprapto',
                email: 'bambangsuprapto@sekolah.id',
                SubjectId: 1
              },
              {
                first_name: 'Rukmana',
                last_name: 'Fatmawati',
                email: 'rukmanafatmawati@sekolah.id',
                SubjectId: 1
              },
              {
                first_name: 'Butet',
                last_name: 'Naiborhu',
                email: 'butetnaiborhu@sekolah.id',
                SubjectId: 2,
              },
              {
                first_name: 'Yulius',
                last_name: 'Prawiranegara',
                email: 'yuliusprawiranegara@sekolah.id',
                SubjectId: 2,
              }], {});
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
