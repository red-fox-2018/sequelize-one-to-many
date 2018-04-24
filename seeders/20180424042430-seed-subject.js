'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Subjects', [{
      subjectName: 'Kimia',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectName: 'Ekonomi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectName: 'Fisika',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectName: 'Matematika',
      createdAt: new Date(),
      updatedAt: new Date()
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
