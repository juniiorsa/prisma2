import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa a validação automática de todos os DTOs que usam decorators
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades que não estão no DTO
    forbidNonWhitelisted: true, // Lança um erro se propriedades inesperadas forem enviadas
    transform: true, // Transforma o payload para o tipo do DTO
  }));

  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
