import { Controller, Get, NotFoundException } from "@nestjs/common";
import { PlayersService } from "./players.service";

@Controller("/api/players")
export class PlayersController {
  constructor(public PlayersService: PlayersService) {}
  @Get()
  CONTROLLER__GET__ALL__PLAYERS() {
    const result = this.PlayersService.SERVICE_GET_ALL_PLAYERS();
    if (!result) {
      throw new NotFoundException("NO PLAYERS WERE FOUND");
    } else {
      return result;
    }
  }
  
}
