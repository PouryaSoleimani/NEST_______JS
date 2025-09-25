import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";

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
  // GET__SINGLE__ARTICLE() {}
  // DELETE__SINGLE__ARTICLE() {}
}
