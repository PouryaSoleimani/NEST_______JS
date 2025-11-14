import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("/files")
export class FilesController {
  @Get("/get-all")
  getAll() {
    return "GET ALL FILES";
  }

  @Post("/upload")
  @UseInterceptors(FileInterceptor("image")) // 1
  uploadFile(@Body() body: any, @UploadedFile() file: Express.Multer.File) { // 2
    return {
      body: body,
      file: file, // 3
    };
  }
}
