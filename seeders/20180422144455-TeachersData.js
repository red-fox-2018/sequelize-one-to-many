'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      firstname: 'Bambang',
      lastname: 'Suprapto',
      email: 'bambangsuprapto@sekolah.id',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Rukmana',
      lastname: 'Fatmawati',
      email: 'rukmanafatmawati@sekolah.id',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Butet',
      lastname: 'Naiborhu',
      email: 'butetnaiborhu@sekolah.id',createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Yulius',
      lastname: 'Prawiranegara',
      email: 'yuliusprawiranegara@sekolah.id',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
    return queryInterface.bulkDelete('Person', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
