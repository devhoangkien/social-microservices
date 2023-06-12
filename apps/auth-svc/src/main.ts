import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { LoggerService } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { join } from 'path';
async function bootstrap() {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  console.log(`NODE_ENV: ${NODE_ENV}`);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
        package: 'auth', // ['hero', 'hero2']
        protoPath: join(__dirname, './_proto/auth.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
        loader: {
          keepCase: true,
          enums: String,
          oneofs: true,
          arrays: true,
        },
      },
    },
  );

  app.useLogger(app.get<Logger, LoggerService>(Logger));

  return app.listen();
}
bootstrap();
