import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ALL__DATAS } from "../../__data__/db.js";
import { CreateSingleProductDTO } from "./product.pipe.js";
import { ProductServiceService } from "products/product-service.service.js";
@Controller("/api/products")
export class ProductsController {
  productService: ProductServiceService;

  constructor() {
    this.productService = new ProductServiceService();
  }

  @Get("/")
  GET__ALL__PRODUCTS() {
    return {
      ok: true,
      message: "ALL PRODUCTS ROUTE ==GET==",
      allProducts: this.productService.FIND__ALL(),
    };
  }

  @Get("/:id")
  GET__SINGLE__PRODUCT(@Param() single_product_id) {
    const SingleProduct = ALL__DATAS._Products.find(
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
    ALL__DATAS._Products.push(postReqBody);
    console.log("NEW DATAS ==>", ALL__DATAS._Products);
    return {
      ok: true,
      message: "NEW PRODUCT ADDDED",
      data: ALL__DATAS._Products,
    };
  }
}
ProductsController;
