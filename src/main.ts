import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 8000;
  await app.listen(port, () => {
    console.log(`🖥️  SERVER IS LISTENING AT PORT ${port}`);
  });
}
bootstrap();
