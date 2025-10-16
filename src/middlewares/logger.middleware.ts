import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class LoggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('REQ IP', req.ip)
    console.log('REQ URL', req.url)
    console.log('REQ BASEURL', req.baseUrl)
    next()
  }
}

export function Logger(req: Request, res: Response, next: NextFunction) {
  console.log('REQ IP', req.ip)
  console.log('REQ URL', req.url)
  console.log('REQ BASEURL', req.baseUrl)
  next
}