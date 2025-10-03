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

  GET__SINGLE__POST(propID: number) {
    const raw = readFileSync('__data__\\posts.json', 'utf-8')
    const parsed = JSON.parse(raw)
    const single_post = parsed.find((item: any) => item.id == propID)
    if (single_post) {
      return {
        ok: true,
        message: 'SINGLE POST ==GET== ROUTE',
        data: single_post
      }
    }
  }
}