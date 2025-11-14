import { Controller, Get, Post } from "@nestjs/common";

@Controller("/files")
export class FilesController {
  @Get("/get-all")
  getAll() {
    return "GET ALL FILES";
  }

  @Post("/upload")
  uploadFile() {
    return "FILE UPLOAD";
  }
}
