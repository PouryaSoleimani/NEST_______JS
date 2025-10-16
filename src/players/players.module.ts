import { PlayersController } from "./players.controller";
import { PlayersService } from "./players.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule { }
