import { Injectable } from "@nestjs/common";
import { ALL__DATAS } from "../../__data__/db.js";
import { CategoriesPostDTO } from "./categories.pipe.js";

@Injectable()
export class CategoriesRepository {
  GET__ALL__CATEGORIES() {
    return {
      ok: true,
      message: "GET ALL CATEGORIES ==GET== ROUTE",
      data: ALL__DATAS._Categories,
    };
  }
  GET__SINGLE__CATEGORY(id: number) {
    const _Category = ALL__DATAS._Categories.find(
      (item: CategoriesPostDTO) => item.id == id,
    );
    return {
      ok: true,
      message: _Category ? "GET ALL CATEGORIES ==GET== ROUTE" : "CATEGORY NOT FOUND !",
      data: _Category ? _Category : null,
    };
  }
  CREATE_SINGLE_CATEGORY(body: CategoriesPostDTO) {
    ALL__DATAS._Categories.push(body);
    return {
      ok: true,
      message: "201 - CATEGORY CREATED SUCCESSFULLY",
      body: body,
      data: ALL__DATAS._Categories,
    };
  }
}
