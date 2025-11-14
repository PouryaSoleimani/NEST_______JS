import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import path from "node:path";

@Controller("/files")
export class FilesController {
  @Get("/get-all")
  getAll() {
    return "GET ALL FILES";
  }

  //^ UPLOAD FILE
  @Post("/upload")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const fileName = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          cb(null, `${fileName}-${Date.now()}${extension}`);
        },
      }),
    }),
  ) // 1
  uploadFile(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    // 2
    return {
      body: body,
      file: file, // 3
    };
  }

  //GET IMAGE
  @Get("/image/:image")
  showImage(@Param("image") img: string) {
    return { img };
  }
}
