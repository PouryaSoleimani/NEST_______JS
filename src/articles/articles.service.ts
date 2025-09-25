import { Injectable } from "@nestjs/common";
import { ArticlesRepository } from "./articles.repository";

@Injectable()
export class ArticlesService {
  constructor(public articlesRepo: ArticlesRepository) {}

  GET__ALL__ARTICLES() {
    return this.articlesRepo.GET__ALL__ARTICLES();
  }
  GET__SINGLE__ARTICLE(id: number) {
    return this.articlesRepo.GET__SINGLE__ARTICLE(+id);
  }
  DELETE__SINGLE__ARTICLE() {
    return "Hello from ArticlesController";
  }
}
