import { Param, ParseIntPipe } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";
type SingleProductType = {
  id: number;
  title: string;
  price: number;
  isAvailable: boolean;
};
export class ProductsRepository {
  FIND__ALL__PRODUCTS() {
    const content = readFileSync("__data__\\products.json", "utf-8");
    const parsedContent = JSON.parse(content);
    return {
      ok: true,
      message: "GET ALL PRODUCTS",
      data: parsedContent,
    };
  }
  FIND__SINGLE__PRODUCT(ID: number) {
    const content = readFileSync("__data__\\products.json", "utf-8");
    const parsedContent = JSON.parse(content);
    const singleProduct = parsedContent.find(
      (item: SingleProductType) => item.id === ID,
    );

    return {
      ok: true,
      message: "GET SINGLE PRODUCT",
      data: singleProduct,
    };
  }

  CREATE__PRODUCT(req_body: SingleProductType) {
    const content = readFileSync("__data__\\products.json", "utf-8");
    const parsedContent = JSON.parse(content);
    const newData = writeFileSync(parsedContent, JSON.stringify(req_body));
    return {
      ok: true,
      message: "NEW PRODUCT CREATED",
      data: newData,
    };
  }
}
