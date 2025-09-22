import { UserRepository } from "./user.repo";

export class UsersService {
  usersRepo: UserRepository;
  constructor() {
    this.usersRepo = new UserRepository();
  }
  GET__ALL__USERS() {
    return this.usersRepo.FIND__ALL__USERS();
  }
  GET__SINGLE__USER(id: number) {
    return this.usersRepo.FIND__SINGLE__USER(id);
  }
  CREATE__SINGLE__USER(body: any) {
    return this.usersRepo.CREATE__SINGLE__USER(body);
  }
}
