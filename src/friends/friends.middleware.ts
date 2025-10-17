import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class FriendsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log("💙🩵 FRIENDS ROUTE");
    next();
  }
}
