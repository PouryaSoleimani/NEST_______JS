import { CategoriesService } from "./categories.service";
import { Module } from "@nestjs/common";
import { ArticlesService } from "src/articles/articles.service";
import { CategoriesRepository } from "./categories.repository";

@Module({
  imports: [ArticlesService],
  controllers: [CategoriesModule],
  providers: [CategoriesService, CategoriesRepository],
  exports: [CategoriesService],
})
export class CategoriesModule {}
