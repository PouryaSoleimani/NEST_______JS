import { BadRequestException, Controller, Get } from "@nestjs/common";
import { ArticlesService } from "./articles.service";

@Controller("/api/articles")
export class ArticlesController {
  constructor(public ArticlesService: ArticlesService) {}
  @Get("/")
  GET__ALL__ARTICLES() {
    const result = this.ArticlesService.GET__ALL__ARTICLES();
    if (!result) {
      throw new BadRequestException("BAD REQUEST");
    }
    return result;
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
