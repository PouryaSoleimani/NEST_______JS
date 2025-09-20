import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { CreatePostDto } from "./posts.pipe";

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

  @Post(":id")
  CREATE_SINGLE_POST(
    @Body() single_post_body: CreatePostDto,
    @Param() single_post_param: any,
    @Query() single_post_query: any,
  ) {
    return {
      ok: true,
      message: "SINGLE POST ==POST== ROUTE ",
      data: {
        body: single_post_body,
        params: [single_post_param],
        query: { single_post_query },
      },
    };
  }
}
