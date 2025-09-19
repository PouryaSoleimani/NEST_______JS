import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { _Products } from "./../../__data__/db.js";
import { createSingleProductDTO } from "./product.dto.js";

@Controller("/api/products")
export class ProductsController {
  @Get("/")
  GET__ALL__PRODUCTS() {
    return {
      ok: true,
      message: "ALL PRODUCTS ROUTE ==GET==",
      allProducts: _Products,
    };
  }

  @Get("/:id")
  GET__SINGLE__PRODUCT(@Param() single_product_id) {
    const singleProduct = _Products.find((item: any) => {
      item.id === Number(single_product_id.id);
    });
    return {
      ok: singleProduct ? true : false,
      message: singleProduct ? "PRODUCT__FOUND ==200==" : "PRODUCT__NOT__FOUND ==400==",
      product: singleProduct ? singleProduct : undefined,
      param: single_product_id,
    };
  }

  @Post("/:id")
  POST__SINGLE__PRODUCT(@Body() postReqBody: createSingleProductDTO) {
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
