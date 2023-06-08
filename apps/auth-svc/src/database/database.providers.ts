import { Sequelize } from 'sequelize-typescript';

import { DB_CONFIG, DB_POOL_CONFIG } from 'src/config/dotnet';
import { UserModel } from 'src/models/user.entity';
import { Logger } from '@nestjs/common';

const logger = new Logger('DatabaseProvider');
const models = [UserModel];
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
