import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { CreateNewArticleDTO } from "./aticles.pipe";

@Controller("/api/articles")
export class ArticlesController {
  constructor(
    public ArticlesService: ArticlesService,
  ) { }

  @Get("/")
  GET__ALL__ARTICLES() {
    const result = this.ArticlesService.GET_ALL_ARTICLES();
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
  @Post("/")
  CREATE___NEW___ARTILCE(@Body() single__article__req__body: CreateNewArticleDTO) {
    const result = this.ArticlesService.CREATE__SINGLE__USER(single__article__req__body);
    if (!result) {
      throw new BadRequestException("BAD REQUEST ! , PLEASE DOUBLE AND CHECK AGAIN");
    } else {
      return result;
    }
  }
  @Get("/user/:id")
  GET__SINGLE__USER(@Param("id") single__user__id: number) {
    return 'GET___SINGLE___USER'
  }
}
