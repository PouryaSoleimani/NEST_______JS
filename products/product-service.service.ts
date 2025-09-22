import { Injectable } from "@nestjs/common";
import {
  CreateSingleProductDTO,
  UpdateSingleProductDTO,
} from "src/products/product.pipe";

@Injectable()
export class ProductServiceService {
  create(createProductServiceDto: CreateSingleProductDTO) {
    return "This action adds a new product-service";
  }

  findAll() {
    return `This action returns all product-services`;
  }

  findOne(id: number) {
    return `This action returns a #id product-service`;
  }

  update(id: number, updateProductServiceDto: UpdateSingleProductDTO) {
    return `This action updates a #id product-service`;
  }

  remove(id: number) {
    return `This action removes a #id product-service`;
  }
}
