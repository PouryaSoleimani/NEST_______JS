import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Res,
  UploadedFile,
  UseInterceptors,
  Version,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import path from "node:path";

@Controller("/files")
export class FilesController {
  @Get("/get-all")
  @Version("1")
  getAll() {
    return "GET ALL FILES --VERSION 1 F";
  }

  @Get("/get-all")
  @Version("2")
  getAll2() {
    return "V2";
  }

  // UPLOAD FILE ___________________________________________________________________________________________________________
  @Post("/upload")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const fileName = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          cb(null, `${fileName}-${Date.now()}${extension}`);
          console.info(req);
        },
      }),
      // VALIDATIONS
      fileFilter: (req, file, cb) => {
        const extension = path.parse(file.originalname).ext;
        const size = file.size;
        if (extension != ".jpg" || size >= 30000) {
          return cb(new BadRequestException("400 | BAD REQUEST"), false);
        }
        console.info(req);
        return cb(null, true);
      },
      limits: { fileSize: 30000 },
    }),
  ) // 1
  uploadFile(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    // 2
    return {
      body: body,
      file: file, // 3
    };
  }

  // GET IMAGE _________________________________________________________________________________________________________
  @Get("/image/:image")
  showImage(@Param("image") img: string, @Res() res: any) {
    return res.sendFile(img, { root: "./uploads" });
  }

  // RENDER HTML VIEW PAGE _________________________________________________________________________________________________________
  @Get("get-html")
  @Render("index")
  renderHtml() {
    return { name: "pourya", age: 32 };
  }
}
