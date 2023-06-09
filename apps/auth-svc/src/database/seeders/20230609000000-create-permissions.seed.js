'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('permissions', [
      {
        key: 'create',
        name: 'Create',
        value: 'create',
        group: 'User',
      },
      {
        key: 'read',
        name: 'Read',
        value: 'read',
        group: 'User',
      },
      {
        key: 'update',
        name: 'Update',
        value: 'update',
        group: 'User',
      },
      {
        key: 'delete',
        name: 'Delete',
        value: 'delete',
        group: 'User',
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('permissions', null, {});
  },
};
