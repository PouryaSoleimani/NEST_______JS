import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class CategoriesController {
  @Get("/categories")
  getAllCategories() {
    return "ALL CATEGORIES ROUTE";
  }
}
