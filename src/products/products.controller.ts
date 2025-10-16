import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { CreateSingleProductDTO } from "./products.pipe";
import { ProductsService } from "./products.service";
import { ArticlesService } from "src/articles/articles.service";
import {
  ProductsAvailablesInterceptor,
  ProductsGetAllInterceptor,
} from "./products.interceptor";
@Controller("/products")
export class ProductsController {
  constructor(
    public productServive: ProductsService,
    public ArticlesService: ArticlesService,
  ) {}

  @UseInterceptors(ProductsGetAllInterceptor)
  @Get("/")
  get_all() {
    return this.productServive.getAll();
    // .filter((item) => item.isAvailable == true)
  }

  @UseInterceptors(ProductsAvailablesInterceptor)
  @Get("/availables")
  get_availables() {
    return this.productServive.getAvailables();
  }

  @Post("/create")
  create(@Body() body: CreateSingleProductDTO) {
    return this.productServive.create(body);
  }
}
