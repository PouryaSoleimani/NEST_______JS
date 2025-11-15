import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { RequestMethod, ValidationPipe, VersioningType } from "@nestjs/common";
import serveFavicon, * as favicon from "serve-favicon";
import * as path from "path";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { METHODS } from "http";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  //^ GLOBAL PIPES
  app.useGlobalPipes(new ValidationPipe());

  //^ GLOBAL PREFIX
  app.setGlobalPrefix("/api");

  //^ CORS
  app.enableCors({
    origin: ["https://webprog.io"],
    methods: RequestMethod.ALL,
  });

  app.use(helmet()); // HELMET IMPROVES SECURITY IN OUR PROJECTS

  //^ FAVICON
  app.use(serveFavicon(path.join(__dirname, "..", "src", "public", "favicon.ico")));

  //^ SWAGGER
  const config = new DocumentBuilder()
    .setTitle("NEST JS TRAINING")
    .setDescription("THIS IS MY SWAGGER FOR TRAINING NEST JS")
    .setVersion("1.0")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, documentFactory);

  //^ VERSIONING
  app.enableVersioning({
    defaultVersion: "1",
    type: VersioningType.URI,
  });

  //^PORT
  const port = process.env.PORT || 8000;
  await app.listen(port, () => {
    console.log(`🖥️  SERVER IS LISTENING AT PORT ${port}`);
  });
}
bootstrap();
