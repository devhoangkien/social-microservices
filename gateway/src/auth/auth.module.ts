import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import {
  ClientProxyFactory,
  Transport,
  ClientGrpcProxy,
} from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AuthServiceClient',
      useFactory: (configService: ConfigService): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: configService.get<string>('AUTH_SERVICE_URL'),
            package: 'auth',
            protoPath: join(__dirname, '../_proto/auth.proto'),
            loader: {
              keepCase: true,
              enums: String,
              oneofs: true,
              arrays: true,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['AuthServiceClient'],
})
export class AuthModule {}
