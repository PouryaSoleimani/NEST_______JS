import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(3000, () => {
    console.log("🖥️    SERVER IS LISTENING AT PORT 3000 ");
  });
}

bootstrap();
