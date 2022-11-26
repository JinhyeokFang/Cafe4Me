import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import * as compression from 'compression';
import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import HttpExceptionHandler from './base/http-exception-handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'), 10);
  const hostname = configService.get('HOSTNAME');
  Logger.debug(`Server will serviced at ${port} port`);
  app.setGlobalPrefix('api');
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionHandler());
  await app.listen(port, hostname);
  Logger.debug(`Server started`);
}
bootstrap();
