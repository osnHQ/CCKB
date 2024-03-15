import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Enable CORS with specific options
  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.URI, // enable URI versioning
    defaultVersion: '1',
  });
  app.enableCors({
  origin: '*', // *Note: Initially set to "*"
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the methods allowed when accessing the resource
  allowedHeaders: 'Content-Type, Accept', // *Note:Initially set to common headers
});
  await app.listen(3000);
}
bootstrap();
