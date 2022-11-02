import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
