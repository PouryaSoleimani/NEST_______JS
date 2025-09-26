import { BadRequestException, Injectable } from "@nestjs/common";
import { CategoriesPostDTO } from "./categories.pipe.js";
import { CategoriesRepository } from "./categories.repository.js";

@Injectable()
export class CategoriesService {
  constructor(public categoriesRepository: CategoriesRepository) {}

  SERVICE_GET_ALL_CATEGORIES() {
    const result = this.categoriesRepository.GET__ALL__CATEGORIES();
    if (!result) {
      throw new BadRequestException("BAD REQUEST IN GET ALL CATEGORIES");
    } else {
      return result;
    }
  }

  SERVICE_GET__SINGLE__CATEGORY(id: number) {
    const result = this.categoriesRepository.GET__SINGLE__CATEGORY(id);
    if (!result) {
      throw new BadRequestException("BAD REQUEST IN GET SINGLE CATEGORIES");
    } else {
      return result;
    }
  }

  SERVICE_CREATE_SINGLE_CATEGORY(body: CategoriesPostDTO) {
    const result = this.categoriesRepository.CREATE_SINGLE_CATEGORY(body);
    if (!result) {
      throw new BadRequestException("BAD REQUEST IN CREATE SINGLE CATEGORIES");
    } else {
      return result;
    }
  }
}
