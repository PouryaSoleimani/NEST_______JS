import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";

@Injectable()
export class PostsRepository {
  GET__ALL__POSTS() {
    const raw = readFileSync('__data__\\posts.json', 'utf-8')
    const parsed = JSON.parse(raw)
    if (parsed) {
      return {
        ok: true,
        message: 'ALL POSTS ==GET== ROUTE',
        data: parsed
      }
    }
  }
}