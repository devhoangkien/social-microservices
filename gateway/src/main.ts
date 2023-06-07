import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // Logger
  app.useLogger(app.get<Logger, LoggerService>(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Social Microservices')
    .setDescription('The Social API description')
    .setVersion('1.0')
    .addTag('social')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.GATEWAY_PORT || 3000);
  console.warn(`Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();
