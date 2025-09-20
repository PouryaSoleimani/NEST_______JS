import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 5000, () => {
    console.log("🖥️  SERVER IS LISTENING AT PORT 5000 ");
  });
}

bootstrap();
