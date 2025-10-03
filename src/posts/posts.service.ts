
import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(public postsRepo: PostsRepository) { }

  SERVICE__GET__ALL__POSTS() {
    return this.postsRepo.GET__ALL__POSTS()
  }
}
