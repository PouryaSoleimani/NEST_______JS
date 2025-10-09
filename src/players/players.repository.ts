import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";

@Injectable()
export class PlayersRepository {
  REPO___GET___ALL___PLAYERS() {
    const data = readFileSync("__data__\\players.json", "utf-8");
    const parsed = JSON.parse(data);
    if (parsed) {
      return {
        message: "PLAYERS ROUTE ---> GET",
        data: parsed,
      };
    }
  }
}
