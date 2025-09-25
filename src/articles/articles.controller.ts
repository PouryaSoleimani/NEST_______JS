import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
} from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { NotFoundError } from "rxjs";

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
  GET__SINGLE__ARTICLE(@Param("id") single__article__id: number | string) {
    const result = this.ArticlesService.GET__SINGLE__ARTICLE(+single__article__id);
    if (!result) {
      throw new NotFoundException("ARTICLE NOT FOUND !!!");
    }
    return result;
  }

  @Delete("/:id")
  DELETE__SINGLE__ARTICLE(@Param("id") single__article__id: number | string) {
    const result = this.ArticlesService.DELETE__SINGLE__ARTICLE(+single__article__id);
    if (!result) {
      throw new NotFoundException("ARTICLE NOT FOUND");
    } else {
      return result;
    }
  }
}
