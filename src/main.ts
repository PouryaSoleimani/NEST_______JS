import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 8000;
  await app.listen(port, () => {
    console.log(`🖥️  SERVER IS LISTENING AT PORT ${port}`);
  });
}
bootstrap();
