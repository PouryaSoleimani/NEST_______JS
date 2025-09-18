import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

const mockDataArray = [
  { id: 1, name: "POURYA" },
  { id: 2, name: "MAMAD" },
];

@Controller()
class AppController {
  @Get("/")
  getRootRoute() {
    return {
      message: "THE FIRST NEST__JS RESPONSE",
      data: mockDataArray,
    };
  }
}

@Module({
  controllers: [AppController], // DEFINE THE CONTROLLER HERE
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// BOOTSTRAP
bootstrap();
