import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
  @Get("/")
  getRootRoute() {
    return { message: "THE FIRST NEST__JS RESPONSE" };
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

bootstrap();

1;
