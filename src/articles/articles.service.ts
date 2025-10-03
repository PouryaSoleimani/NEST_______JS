import { Injectable } from "@nestjs/common";
import { ArticlesRepository } from "./articles.repository";

@Injectable()
export class ArticlesService {
  constructor(public articlesRepo: ArticlesRepository) {}

  GET_ALL_ARTICLES() {
    return this.articlesRepo.GET___ALL___ARTICLES();
  }

  GET__SINGLE__ARTICLE(id: number) {
    return this.articlesRepo.GET____SINGLE____ARTICLE(+id);
  }

  DELETE__SINGLE__ARTICLE(id: number) {
    return this.articlesRepo.DELETE___SINGLE___ARTICLE(+id);
  }

  CREATE__SINGLE__USER(body: any) {
    return this.articlesRepo.CREATE___SINGLE____USER(body);
  }
}
