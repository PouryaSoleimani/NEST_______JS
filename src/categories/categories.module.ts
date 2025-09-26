import { CategoriesService } from "./categories.service";
import { Module } from "@nestjs/common";
import { ArticlesService } from "src/articles/articles.service";

@Module({
  imports: [ArticlesService],
  controllers: [CategoriesModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
