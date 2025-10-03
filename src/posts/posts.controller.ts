import { Controller, Get, NotFoundException } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller("/api/posts")
export class PostsController {
  constructor(public postsService: PostsService) { }
  @Get()
  GET__ALL__POSTS() {
    const result = this.postsService.SERVICE__GET__ALL__POSTS()
    if (!result) {
      throw new NotFoundException('THERE ARE NO POSTS TO SHOW ...')
    } else {
      return result;
    }

  }
}
