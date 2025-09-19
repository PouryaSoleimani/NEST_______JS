import { Controller, Get, Post } from "@nestjs/common";

@Controller("/api/posts")
export class PostsController {
  @Get("/")
  GET_ALL_POSTS() {
    return "ALL POSTS ==GET==";
  }
  @Get("/:id")
  GET_SINGLE_POST() {
    return "SINGLE POST ==GET==";
  }
  @Post("/:id")
  POST_SINGLE_POST() {
    return "SINGLE POST ==POST==";
  }
}
