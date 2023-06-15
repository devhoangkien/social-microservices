import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ClientProxyFactory,
  Transport,
  ClientGrpcProxy,
} from '@nestjs/microservices';
import { join } from 'path';
import { AuthController } from './auth.controller';

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
            url: configService.get<string>('AUTH_SVC_URL'),
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
    {
      provide: 'UserServiceClient',
      useFactory: (configService: ConfigService): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: configService.get<string>('USER_SVC_URL'), // Replace with the actual URL for the user-svc
            package: 'user',
            protoPath: join(__dirname, '../_proto/user.proto'), // Replace with the actual path to the user.proto file
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
  exports: ['AuthServiceClient', 'UserServiceClient'],
})
export class AuthModule {}
