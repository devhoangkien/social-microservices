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

  if (NODE_ENV === 'development') {
    const app = await NestFactory.create(AppModule, { bufferLogs: true });
    app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
    app.useLogger(app.get<Logger, LoggerService>(Logger));
    await app.startAllMicroservices();
    await app.listen(50051);
    console.log(`Application is running on: ${await app.getUrl()}`);
  } else {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      grpcClientOptionsProduction,
    );

    app.useLogger(app.get<Logger, LoggerService>(Logger));

    return app.listen();
  }
}
bootstrap();
