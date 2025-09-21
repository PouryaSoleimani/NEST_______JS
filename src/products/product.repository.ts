import { Param } from "@nestjs/common";
import { readFile } from "fs/promises";

export class ProductRepository {
  async FIND__ALL__PRODUCTS() {
    const allProducts = await readFile("/__data__/db.js", "utf-8");
    const allProductsParsed = JSON.parse(allProducts);
    return allProductsParsed;
  }

  async FIND__SINGLE__PRODUCT(@Param("id") single_product_id) {
    const allProducts = await readFile("/__data__/db.js", "utf-8");
    const allProductsParsed = JSON.parse(allProducts);
    const single_product = allProductsParsed.find((item) => item.id == single_product_id);
    return single_product_id;
  }

  CREATE__SINGLE__PRODUCT() {}
}
