import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);

  app.useGlobalPipes(new ValidationPipe({}));
  await app.listen(3000);
}
bootstrap();

function setupSwagger(app: INestApplication): void {

  const option = new DocumentBuilder().setTitle("Dummy Swagger API Docu").setDescription("Dummy API").setVersion("1.0.0").build();

  const document = SwaggerModule.createDocument(app, option);
  

}