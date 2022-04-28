import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: 'http://localhost:3002', credentials: true },
  });
  app.setGlobalPrefix('/api/v1');

  const config = new DocumentBuilder()
    .setTitle('Resellers')
    .setDescription('SIDE PROJECT - Resell System')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document); //swagger 접속 주소 설정

  await app.listen(3005);
}
bootstrap();
