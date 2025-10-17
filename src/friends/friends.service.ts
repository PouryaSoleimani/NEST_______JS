import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateSingleFriendDTO } from "./friends.pipe";

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

  async getSingle(id: number) {
    const friend = await this.prisma.friend.findUnique({
      where: { id: id },
    });

    if (!friend) {
      throw new NotFoundException("FRIEND NOT FOUND");
    } else {
      return {
        ok: true,
        message: "SINGLE FRIEND ROUTE",
        data: friend,
      };
    }
  }

  async create(body: CreateSingleFriendDTO) {
    const newFriend = await this.prisma.friend.create({
      data: {
        name: body.name,
        age: body.age,
        gender: body.gender,
      },
    });
    if (!newFriend) {
      throw new BadRequestException("400 | BAD REQUEST");
    } else {
      return {
        ok: true,
        message: "201 | NEW FRIEND CREATED",
        data: newFriend,
      };
    }
  }
}
