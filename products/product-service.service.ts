import { Injectable } from "@nestjs/common";
import {
  CreateSingleProductDTO,
  UpdateSingleProductDTO,
} from "src/products/product.pipe";
import { ProductRepository } from "src/products/product.repository";

@Injectable()
export class ProductServiceService {
  productRepo = new ProductRepository();

  CREATE(createProductServiceDto: CreateSingleProductDTO) {}

  FIND__ALL() {
    return this.productRepo.FIND__ALL__PRODUCTS();
  }

  FIND__ONE(id: number) {
    return `This action returns a #id product-service`;
  }

  UPDATE(id: number, updateProductServiceDto: UpdateSingleProductDTO) {
    return `This action updates a #id product-service`;
  }

  DELETE(id: number) {
    return `This action removes a #id product-service`;
  }
}
