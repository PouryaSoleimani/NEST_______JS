import { Module } from "@nestjs/common";
import { ArticlesController } from "./articles.controller";
import { ArticlesService } from "./articles.service";

import { ArticlesRepository } from "./articles.repository";

@Module({
  imports: [],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesRepository],
  exports: [AtriclesModule],
})
export class AtriclesModule { }
