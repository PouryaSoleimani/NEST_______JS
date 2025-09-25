import { Controller, Get } from "@nestjs/common";

@Controller("/api/articles")
export class ArticlesController {
  @Get("/")
  GET__ALL__ARTICLES() {
    return "Hello from ArticlesController";
  }
  @Get("/:id")
  GET__SINGLE__ARTICLE() {
    return "Hello from ArticlesController";
  }
  @Get("/:id")
  DELETE__SINGLE__ARTICLE() {
    return "Hello from ArticlesController";
  }
}
