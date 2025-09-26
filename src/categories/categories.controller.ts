import { BadRequestException, Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CategoriesPostDTO } from "./categories.pipe.js";
import { CategoriesService } from "./categories.service.js";
import { ArticlesService } from "src/articles/articles.service";

@Controller("/api/categories")
export class CategoriesController {
  constructor(
    public CategoriesService: CategoriesService,
    public ArticlesService: ArticlesService,
  ) {}

  @Get("/")
  GET___ALL___CATEGORIES() {
    const result = this.CategoriesService.SERVICE_GET_ALL_CATEGORIES();
    if (!result) {
      throw new BadRequestException("BAD REQUEST");
    } else {
      return result;
    }
  }

  @Get("/:id")
  GET___SINGLE___CATEGORY(@Param("id") single_category_id: number | string) {
    const result =
      this.CategoriesService.SERVICE_GET__SINGLE__CATEGORY(+single_category_id);
    if (!result) {
      throw new BadRequestException("BAD REQUEST");
    } else {
      return result;
    }
  }

  @Post("/create")
  CREATE_SINGLE_CATEGORY(@Body() single_category_req_body: CategoriesPostDTO) {
    const result = this.CategoriesService.SERVICE_CREATE_SINGLE_CATEGORY(
      single_category_req_body,
    );
    if (!result) {
      throw new BadRequestException("BAD REQUEST");
    } else {
      return result;
    }
  }

  @Get("/articles/getAll")
  GET___ALL___ARTICELS___IN___CATEGORIES() {
    const result = this.ArticlesService.GET_ALL_ARTICLES();
    if (!result) {
      throw new BadRequestException("BAD REQUEST !!!");
    } else {
      return result;
    }
  }
}
