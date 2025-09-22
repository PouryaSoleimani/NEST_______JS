import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { _Products } from "./../../__data__/db.js";
import { CreateSingleProductDTO } from "./product.pipe.js";
import { ProductRepository } from "./product.repository.js";
@Controller("/api/products")
export class ProductsController {
  productRepo: ProductRepository;

  constructor() {
    this.productRepo = new ProductRepository();
  }

  @Get("/")
  GET__ALL__PRODUCTS() {
    return {
      ok: true,
      message: "ALL PRODUCTS ROUTE ==GET==",
      allProducts: this.productRepo.FIND__ALL__PRODUCTS(),
    };
  }

  @Get("/:id")
  GET__SINGLE__PRODUCT(@Param() single_product_id) {
    const SingleProduct = _Products.find(
      (item: any) => item.id === +single_product_id.id,
    );
    return {
      ok: SingleProduct ? true : false,
      message: SingleProduct
        ? "PRODUCT__FOUND ==200=="
        : "PRODUCT__NOT__FOUND ==400==",
      product: SingleProduct ? SingleProduct : undefined,
      param: single_product_id,
    };
  }

  @Post("/:id")
  POST__SINGLE__PRODUCT(@Body() postReqBody: CreateSingleProductDTO) {
    _Products.push(postReqBody);
    console.log("NEW DATAS ==>", _Products);
    return {
      ok: true,
      message: "NEW PRODUCT ADDDED",
      data: _Products,
    };
  }
}
ProductsController;
