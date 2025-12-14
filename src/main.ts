import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import serveFavicon, * as favicon from "serve-favicon";
import * as path from "path";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
   const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

   // VIEW RENDERING
   // npm i hbs - (handlebars)
   app.setBaseViewsDir(path.join(__dirname, "..", "views"));
   app.useStaticAssets(path.join(__dirname, "..", "public"));
   app.setViewEngine("hbs");

   // GLOBAL PIPES
   app.useGlobalPipes(new ValidationPipe());

   // GLOBAL PREFIX
   app.setGlobalPrefix("/api");

   // CORS
   app.enableCors({
      origin: ["https://webprog.io"],
   });

   app.use(helmet()); // HELMET IMPROVES SECURITY IN OUR PROJECTS

   // FAVICON
   app.use(serveFavicon(path.join(__dirname, "..", "src", "public", "favicon.ico")));

   // SWAGGER
   const config = new DocumentBuilder().setTitle("NEST JS TRAINING").setDescription("THIS IS MY SWAGGER FOR TRAINING NEST JS").setVersion("1.0").build();
   const documentFactory = () => SwaggerModule.createDocument(app, config);
   SwaggerModule.setup("/api/docs", app, documentFactory);

   // VERSIONING
   app.enableVersioning({
      defaultVersion: "1",
      type: VersioningType.URI,
   });

   // PORT
   const port = process.env.PORT || 8000;
   await app.listen(port, () => {
      console.log(`🖥️  SERVER IS LISTENING AT PORT ${port}`);
   });
}
bootstrap();
