import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Products Crud')
    .setDescription(
      `A simple product and category management API built with NestJS and PostgreSQL using Prisma.  
It allows users to create, retrieve, update, and delete products and categories.  
Designed for evaluation purposes, it follows clean architecture and includes Docker support.
`,
    )
    .setVersion('1.0')
    .addTag('crud')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
