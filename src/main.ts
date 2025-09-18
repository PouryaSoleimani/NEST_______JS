import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppController } from "./main.controller";
import { AppModule } from "./main.module";

const mockDataArray = [
  { id: 1, name: "POURYA" },
  { id: 2, name: "MAMAD" },
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// BOOTSTRAP
bootstrap();
