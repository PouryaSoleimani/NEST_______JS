import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { CreateSingleProductDTO } from "./products.pipe";

@Controller("/api/products")
export class ProductsController {
  productsRepo: ProductsRepository;
  constructor() {
    this.productsRepo = new ProductsRepository();
  }
  @Get("/")
  GET__ALL__PRODUCTS() {
    console.log(this.productsRepo.FIND__ALL__PRODUCTS());
    return this.productsRepo.FIND__ALL__PRODUCTS();
  }
  @Get("/:id")
  GET__SINGLE__PRODUCT(@Param("id", ParseIntPipe) single_product_id) {
    return this.productsRepo.FIND__SINGLE__PRODUCT(+single_product_id);
  }

  @Post("/")
  CREATE__NEW__POST(@Body() single_product_req_body: CreateSingleProductDTO) {
    return this.productsRepo.CREATE__PRODUCT(single_product_req_body);
  }
}
