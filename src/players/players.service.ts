import { Injectable, NotFoundException } from "@nestjs/common";
import { PlayersRepository } from "./players.repository";

@Injectable()
export class PlayersService {
  constructor(public PlayersRepo: PlayersRepository) { }

  SERVICE_GET_ALL_PLAYERS() {
    const result = this.PlayersRepo.REPO___GET___ALL___PLAYERS();
    if (!result) {
      throw new NotFoundException("NO PLAYERS WERE FOUND");
    } else {
      return result;
    }
  }
}
