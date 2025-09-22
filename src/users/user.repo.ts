import { readFileSync, writeFileSync } from "fs";

export class UserRepository {
  FIND__ALL__USERS() {
    const usersBuffer = readFileSync("__data__\\users.json", "utf-8");
    const parsedData = JSON.parse(usersBuffer);
    return {
      ok: true,
      message: "ALL__USERS__GET__ROUTE",
      data: parsedData,
    };
  }
  FIND__SINGLE__USER(id: number) {
    const bufferedData = readFileSync("__data__\\users.json", "utf-8");
    const parsedData = JSON.parse(bufferedData);
    const single__user = parsedData.find((item: any) => item.id === Number(id));
    return {
      ok: true,
      message: "USER__SINGLE__GET__ROUTE",
      data: single__user,
    };
  }
  CREATE__SINGLE__USER(body: any) {
    const bufferedData = readFileSync("__data__\\users.json", "utf-8");
    const parsedData = JSON.parse(bufferedData);
    const ObjectToAdd = { id: parsedData.length + 1, ...body };
    parsedData.push(ObjectToAdd);
    const result = writeFileSync(
      "__data__//users.json",
      JSON.stringify(parsedData),
    );
    return {
      ok: true,
      message: "201 | USER CREATED",
      data: result,
      allUsers: parsedData,
    };
  }
}
