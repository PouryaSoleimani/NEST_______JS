import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { PrismaClient } from "generated/prisma";
import { UsersService } from "src/users/user.service";
@Injectable()
export class ArticlesRepository {
  prisma = new PrismaClient();
  GET___ALL___ARTICLES() {
    const data = readFileSync("__data__\\articles.json", "utf-8");
    const parsedData = JSON.parse(data);
    return {
      ok: true,
      message: "ALL____ARTICLES____ROUTE",
      ARTICLES: parsedData,
    };
  }

  GET____SINGLE____ARTICLE(id: number) {
    const data = readFileSync("__data__\\articles.json", "utf-8");
    const parsedData = JSON.parse(data);
    const single__article = parsedData.find((item: any) => item.id == id);
    if (single__article) {
      return {
        ok: true,
        message: "SINGLE___ARTICLE____ROUTE",
        data: single__article,
      };
    }
  }

  DELETE___SINGLE___ARTICLE(id: number) {
    const data = readFileSync("__data__\\articles.json", "utf-8");
    const parsedData = JSON.parse(data);
    const single___article = parsedData.find((item: any) => +item.id == +id);
    const filteredArray = parsedData.filter((item: any) => item.id !== id);
    writeFileSync("__data__\\articles.json", JSON.stringify(filteredArray));
    if (single___article) {
      return {
        ok: true,
        message: "SINGLE____ARTICLE____ROUTE____DELETE",
        data: filteredArray,
      };
    }
  }

  async CREATE___SINGLE____USER(body: any) {
    const data = readFileSync("__data__\\articles.json", "utf-8");
    const parsedData = JSON.parse(data);
    const DTO = { id: parsedData.length + 1, ...body };
    parsedData.push(DTO);
    const newUser = await this.prisma.user.create({
      data: {
        user_name: body.name,
        last_name: body.name,
        email: "ali@gmail.com",
      },
    });
    writeFileSync("__data__\\articles.json", JSON.stringify(parsedData));
    if (body && DTO) {
      return {
        ok: true,
        message: "201 | USER___CREATED___SUCCESSFULYY 🤍",
        data: DTO,
      };
    }
  }
}
