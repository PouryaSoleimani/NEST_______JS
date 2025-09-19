import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";

@Controller("/api/posts")
export class PostsController {
  @Get("/")
  GET_ALL_POSTS() {
    return "ALL POSTS ==GET==";
  }

  @Get("/:id")
  GET_SINGLE_POST(@Param("id", ParseIntPipe) single_post_get_param) {
    return {
      ok: true,
      message: "GET_SINGLE_POST_ROUTE",
      params: [{ id: single_post_get_param }],
    };
  }

  @Post("/:id")
  POST_SINGLE_POST(
    @Body() single_post_datas: any,
    @Query() single_post_query: { [name: string]: string },
    @Param() single_post_param: number,
  ) {
    return {
      ok: true,
      message: "POST SINGLE ROUTE ==POST==",
      data: single_post_datas,
      query: single_post_query,
      param: single_post_param,
    };
  }
}
