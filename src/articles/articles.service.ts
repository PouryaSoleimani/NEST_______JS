import { Injectable } from "@nestjs/common";

@Injectable()
export class ArticlesService {
  GET__ALL__ARTICLES() {
    return "Hello from ArticlesController";
  }
  GET__SINGLE__ARTICLE() {
    return "Hello from ArticlesController";
  }
  DELETE__SINGLE__ARTICLE() {
    return "Hello from ArticlesController";
  }
}
