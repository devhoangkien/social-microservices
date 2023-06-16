import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { LoggerService } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import {
  grpcClientOptions,
  grpcClientOptionsProduction,
} from './config/grpc-client.options';
async function bootstrap() {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  console.log(`NODE_ENV: ${NODE_ENV}`);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOptionsProduction,
  );

  app.useLogger(app.get<Logger, LoggerService>(Logger));
  // app.useGlobalFilters(new RpcExceptionFilter());

  return app.listen();
}
bootstrap();
