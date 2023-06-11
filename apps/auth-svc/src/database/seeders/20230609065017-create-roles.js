'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const permissions = await queryInterface.sequelize.query(
      `SELECT key FROM permissions;`,
    );
    const permissionRows = permissions[0];

    const rolesData = [
      {
        name: 'Admin',
        level: 1,
        permissions: ['create', 'update'],
      },
      {
        name: 'User',
        level: 1,
        permissions: ['delete', 'update'],
      },
    ];

    const newRole = rolesData.map((role) => {
      return {
        name: role.name,
        level: role.level,
      };
    });

    const insertedRoles = await queryInterface.bulkInsert('roles', newRole, {
      returning: true,
    });

    const roleRows = insertedRoles.map((role) => role);

    const rolePermissions = [];

    roleRows.forEach((role) => {
      const roleData = rolesData.find((r) => r.name === role.name);
      console.log(roleData);
      if (roleData && roleData.permissions && roleData.permissions.length > 0) {
        roleData.permissions.forEach((permissionKey) => {
          const permission = permissionRows.find(
            (p) => p.key === permissionKey,
          );
          if (permission) {
            rolePermissions.push({
              role_id: role.id,
              permission_key: permission.key,
            });
          }
        });
      }
    });

    return await queryInterface.bulkInsert('role_permissions', rolePermissions);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('role_permissions', null, {});
    await queryInterface.bulkDelete('roles', null, {});
  },
};
