import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { LoggerService } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { join } from 'path';
async function bootstrap() {
  /**
   * This example contains a hybrid application (HTTP + gRPC)
   * You can switch to a microservice with NestFactory.createMicroservice() as follows:
   *
   * const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   *  transport: Transport.GRPC,
   *  options: {
   *    package: 'hero',
   *    protoPath: join(__dirname, './hero/hero.proto'),
   *  }
   * });
   * await app.listen();
   *
   */
  // const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  // app.useLogger(app.get<Logger, LoggerService>(Logger));
  // await app.startAllMicroservices();
  // await app.listen(50051);
  // console.log(`Application is running on: ${await app.getUrl()}`);

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
