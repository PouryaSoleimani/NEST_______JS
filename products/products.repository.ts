import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";

type SingleProductType = {
  id?: number;
  title: string;
  price: number;
  isAvailable: boolean;
};
@Injectable()
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
    parsedContent.push({ id: parsedContent.length + 1, ...req_body });
    const newData = writeFileSync(
      "__data__\\products.json",
      JSON.stringify(parsedContent),
    );
    return {
      ok: true,
      message: "201 || NEW PRODUCT CREATED ",
      data: newData,
    };
  }
}
