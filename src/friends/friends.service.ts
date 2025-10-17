import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FriendsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const allfriends = await this.prisma.friend.findMany();
    if (!allfriends) {
      throw new NotFoundException("NO FRIENDS WERE FOUND");
    } else {
      return {
        ok: true,
        message: "ALL FRIENDS LIST",
        data: allfriends,
      };
    }
  }

  async create(body: any) {
    const newFriend = await this.prisma.friend.create({
      data: {
        name: body.name,
        age: body.age,
        gender: body.gender,
      },
    });
  }
}
