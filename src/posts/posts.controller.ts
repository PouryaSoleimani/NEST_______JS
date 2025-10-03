import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
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

  @Get('/:id')
  GET__SINGLE__POST(@Param('id') single_post_id: number | string) {
    const result = this.postsService.SERVICE__GET__SINGLE__POST(+single_post_id)
    if (!result) {
      throw new NotFoundException('EXPECTED POST NOT FOUND IN DATABASE ...')
    } else {
      return result;
    }
  }
}
