import { Controller, Get } from "@nestjs/common";

const mockDataArray = [
  { id: 1, name: "POURYA" },
  { id: 2, name: "MAMAD" },
  { id: 3, name: "MOHSEN" },
];

@Controller()
export class AppController {
  @Get("/")
  getRootRoute() {
    return {
      message: "THE FIRST NEST__JS RESPONSE",
      data: mockDataArray,
    };
  }
}
