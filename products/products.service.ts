import { Injectable } from "@nestjs/common";
import {
  CreateSingleProductDTO,
  UpdateSingleProductDTO,
} from "./products.pipe";
import { ProductsRepository } from "./products.repository";

@Injectable()
export class ProductsService {
  productsRepo: ProductsRepository;
  constructor() {
    this.productsRepo = new ProductsRepository();
  }

  CREATE__NEW__PRODUCT(createProductsDto: CreateSingleProductDTO) {
    return this.productsRepo.CREATE__PRODUCT(createProductsDto);
  }

  GET__ALL__PRODUCTS() {
    return this.productsRepo.FIND__ALL__PRODUCTS();
  }

  GET__SINGLE__PRODUCT(single_product_id: number) {
    return this.productsRepo.FIND__SINGLE__PRODUCT(+single_product_id);
  }

  UPDATE__SINGLE__PRODUCT(
    id: number,
    updateProductsDto: UpdateSingleProductDTO,
  ) {
    return `This action updates a #id products`;
  }

  REMOVE__SINGLE__PRODUCT(id: number) {
    return `This action removes a #id products`;
  }
}
