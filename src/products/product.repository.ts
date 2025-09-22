import { Param } from "@nestjs/common";
import { readFile } from "fs/promises";
import { ALL__DATAS } from "../../__data__/db.js";
export class ProductRepository {
  async FIND__ALL__PRODUCTS() {
    const _Products = await readFile("./../../__data__/db.js", "utf-8");
    const Products = JSON.parse(_Products);
    return Products;
  }

  async FIND__SINGLE__PRODUCT(@Param("id") single_product_id) {
    const allProducts = await readFile("./../../__data__/db.js", "utf-8");
    const allProductsParsed = JSON.parse(allProducts);
    const single_product = allProductsParsed.find(
      (item: any) => item.id == single_product_id,
    );
    return single_product;
  }

  CREATE__SINGLE__PRODUCT() {}
}
