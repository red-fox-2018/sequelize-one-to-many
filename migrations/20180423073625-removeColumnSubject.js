'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Teacher',
      'Subject',
      Sequelize.STRING
    );
  }
};
