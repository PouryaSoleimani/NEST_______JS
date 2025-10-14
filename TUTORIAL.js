// CORS app.enableCors();

// SWAGGER
const config = new DocumentBuilder()
  .setTitle("TRAINING API")
  .setDescription("NEST_JS TRAINING API")
  .setVersion("1.0")
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup("api/docs", app, documentFactory);

// FAVICON
// app.use(serveFavicon(path.join(\_\_dirname, '..', 'src', 'public', 'favicon.ico')));

// GLOBAL PREFIX
app.setGlobalPrefix("/api/v1");

import { ApiProperty } from "@nestjs/swagger";
// @IsString()
// @ApiProperty()
// name: string;
