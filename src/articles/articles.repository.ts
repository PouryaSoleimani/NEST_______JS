import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";

@Injectable()
export class ArticlesRepository {
  GET__ALL__ARTICLES() {
    const data = readFileSync("__data__\\articles.json", "utf-8");
    const parsedData = JSON.parse(data);
    const hasLength = parsedData.length > 0 ? true : false;
    if (hasLength) {
      return {
        ok: true,
        message: "ALL____ARTICLES____ROUTE",
        data: parsedData,
      };
    }
  }
  GET__SINGLE__ARTICLE(id: number) {
    const data = readFileSync("__data__\\articles.json", "utf-8");
    const parsedData = JSON.parse(data);
    const single__article = parsedData.find((item: any) => item.id == id);
    if (single__article) {
      return {
        ok: true,
        message: "SINGLE___ARTICLE____ROUTE",
        data: single__article,
      };
    }
  }
  DELETE___SINGLE___ARTICLE(id: number) {
    const data = readFileSync("__data__\\articles.json", "utf-8");
    const parsedData = JSON.parse(data);
    const single___article = parsedData.find((item: any) => +item.id == +id);
    const filteredArray = parsedData.filter((item: any) => item.id !== id);
    writeFileSync("__data__\\articles.json", JSON.stringify(filteredArray));
    if (single___article) {
      return {
        ok: true,
        message: "SINGLE____ARTICLE____ROUTE____DELETE",
        data: filteredArray,
      };
    }
  }
}
