import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
    imports: [CategoriesService],
    controllers: [PostsController,],
    providers: [PostsService,],
})
export class PostsModule { }
