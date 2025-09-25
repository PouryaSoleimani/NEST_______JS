import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CreateSingleProductDTO } from "./products.pipe";
import { ProductsService } from "./products.service";

@Controller("/api/products")
export class ProductsController {
  productServive: ProductsService;

  constructor(public repo: ProductsService) { }

  @Get("/")
  GET__ALL__PRODUCTS() {
    return this.productServive.GET__ALL__PRODUCTS();
  }

  @Get("/:id")
  GET__SINGLE__PRODUCT(@Param("id", ParseIntPipe) single_product_id) {
    return this.productServive.GET__SINGLE__PRODUCT(single_product_id);
  }

  @Post("/")
  CREATE__NEW__POST(@Body() single_product_req_body: CreateSingleProductDTO) {
    return this.productServive.CREATE__NEW__PRODUCT(single_product_req_body);
  }
}
