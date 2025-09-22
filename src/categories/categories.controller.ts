import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ALL__DATAS } from "../../__data__/db.js";
import { CategoriesPostDTO } from "./categories.pipe.js";

@Controller("/api/categories")
export class CategoriesController {
  @Get("/")
  GET__ALL__CATEGORIES() {
    return {
      ok: true,
      message: "GET ALL CATEGORIES ==GET== ROUTE",
      data: ALL__DATAS._Categories,
    };
  }

  @Get("/:id")
  GET__SINGLE__CATEGORY(@Param("id") single_category_id) {
    const _Category = ALL__DATAS._Categories.find(
      (item: CategoriesPostDTO) => item.id == single_category_id,
    );
    return {
      ok: true,
      message: _Category
        ? "GET ALL CATEGORIES ==GET== ROUTE"
        : "CATEGORY NOT FOUND !",
      data: _Category ? _Category : null,
    };
  }

  @Post("/create")
  CREATE_SINGLE_CATEGORY(@Body() single_category_req_body: CategoriesPostDTO) {
    ALL__DATAS._Categories.push(single_category_req_body);
    return {
      ok: true,
      message: "201 - CATEGORY CREATED SUCCESSFULLY",
      body: single_category_req_body,
      data: ALL__DATAS._Categories,
    };
  }
}
