import { Controller, Delete, Get, Post } from "@nestjs/common";

@Controller("/api")
export class CategoriesController {
  @Get("/categories")
  getAllCategories() {
    return "ALL CATEGORIES ROUTE";
  }
  @Get("/categories/:id")
  getSingleCategory() {
    return "SINGLE CATEGORY ROUTE";
  }
  @Post("categories/:id")
  PostSingleCategory() {
    return "SINGLE CATEGORY ++POST++ ROUTE";
  }
  @Delete("categories/:id")
  DeleteSingleCategory() {
    return "SINGLE CATEGORY ++DELETE++ ROUTE";
  }
}
