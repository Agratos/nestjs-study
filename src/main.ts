import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config.get('server').port;
  await app.listen(port);
  Logger.log(`Application running on port ${port}`);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
