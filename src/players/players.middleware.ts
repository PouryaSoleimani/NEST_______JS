import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class PlayersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('⚾ PLAYERS ROUTE')
    console.log('BASE URL => ', req.baseUrl)
    console.log('RES APP', res.app)
    next()
  }
}