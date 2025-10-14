import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import serveFavicon, * as favicon from 'serve-favicon';
import * as path from 'path';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // GLOBAL PIPES 
  app.useGlobalPipes(new ValidationPipe());
  // GLOBAL PREFIX
  app.setGlobalPrefix('/api/v1')
  // CORS
  app.enableCors()
  // FAVICON
  app.use(serveFavicon(path.join(__dirname, '..', 'src', 'public', 'favicon.ico')));
  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documentFactory);
  //PORT
  const port = process.env.PORT || 8000;
  await app.listen(port, () => {
    console.log(`🖥️  SERVER IS LISTENING AT PORT ${port}`);
  });
}
bootstrap();
