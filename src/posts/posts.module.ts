import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [PostsController,],
    providers: [PostsService,],
})
export class PostsModule { }
