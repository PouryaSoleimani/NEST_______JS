import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateSingleProductDTO, UpdateSingleProductDTO } from "./products.pipe";
import { ProductsRepository } from "./products.repository";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductsService {
  // ADDING REPOSITORY
  constructor(private readonly prisma: PrismaService) { }

  async getAll() {
    const allProducts = await this.prisma.product.findMany()
    if (!allProducts) {
      throw new NotFoundException('404 | PRODUCT NOT FOUND')
    } else {
      return {
        ok: true,
        message: 'ALL PRODUCTS',
        data: allProducts
      }
    }
  }

  async getAvailables() {
    const availables = await this.prisma.product.findMany({
      where: { isAvailable: true }
    })
    if (!availables) {
      throw new NotFoundException('404 | NO PRODUCTS FOUND')
    } else {
      return {
        ok: true,
        message: 'AVAILABLE PRODUCTS',
        availables: availables
      }
    }
  }

  async create(body: CreateSingleProductDTO) {
    const newProduct = await this.prisma.product.create({
      data: {
        title: body.title,
        price: body.price,
        isAvailable: body.isAvailable
      }
    })
    if (!newProduct) {
      throw new BadRequestException("400 | BAD REQUEST")
    } else {
      return {
        ok: true,
        message: "201 | PRODUCT CREATED",
        data: newProduct,
      }
    }
  }

  update(id: number, updateProductsDto: UpdateSingleProductDTO) {
    return `This action updates a #id products`;
  }

  delete(id: number) {
    return `This action removes a #id products`;
  }
}
