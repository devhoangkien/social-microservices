import { Sequelize } from 'sequelize-typescript';

import { DB_CONFIG, DB_POOL_CONFIG } from 'src/config/dotnet';
import { Logger } from '@nestjs/common';
import { Role } from 'src/models/role.model';
import { Permission } from 'src/models/permission.model';
import { RolePermission } from 'src/models/rolePermission.model';
import { Session } from 'src/models/session.model';
import { RefreshToken } from 'src/models/refresh-token.model';

const logger = new Logger('DatabaseProvider');

// add models here
const models = [Role, Permission, RolePermission, Session, RefreshToken];

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        ...DB_CONFIG,
        dialectOptions: {
          supportBigNumbers: true,
        },
        pool: DB_POOL_CONFIG,
      });
      sequelize.addModels(models);
      await sequelize.sync().then(async () => {
        logger.log('generate database done');
      });
      return sequelize;
    },
  },
];
