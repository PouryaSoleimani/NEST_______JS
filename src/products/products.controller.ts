import {
  Body,
  Controller,
  Get,
  NotAcceptableException,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CreateSingleProductDTO } from "./products.pipe";
import { ProductsService } from "./products.service";
import { ArticlesService } from "src/articles/articles.service";

@Controller("/api/products")
export class ProductsController {
  constructor(
    public productServive: ProductsService,
    public ArticlesService: ArticlesService,
  ) {}

  @Get("/")
  get_all() {
    return this.productServive.GET__ALL__PRODUCTS();
  }

  @Get("/:id")
  get_single(@Param("id", ParseIntPipe) single_product_id) {
    return this.productServive.GET__SINGLE__PRODUCT(single_product_id);
  }

  @Post("/")
  create(@Body() single_product_req_body: CreateSingleProductDTO) {
    return this.productServive.CREATE__NEW__PRODUCT(single_product_req_body);
  }

  @Get("/articles/getAll")
  get_all_articles() {
    const result = this.ArticlesService.GET_ALL_ARTICLES();
    if (!result) {
      throw new NotAcceptableException("YOUR REQUEST IS NOT ACCEPTABLE AT THE MOMENT");
    } else {
      return result;
    }
  }
}
