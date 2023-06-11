import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { LoggerModule, PinoLogger } from 'nestjs-pino';
import { RolesModule } from './modules/roles/roles.module';
import { DatabaseModule } from './database/database.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    AuthModule,
    RolesModule,
    PermissionsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
