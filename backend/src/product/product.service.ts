import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { UpdateProductDto } from 'src/dto/productpath.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async listProduct() {
    const user = await this.prisma.products.findMany({
      include: {
        categories: true,
      },
    });
    return user;
  }

  async createProduct(dto: ProductDto) {
    const user = await this.prisma.products.create({
      data: {
        categories: {
          connect: dto.categories.map((id) => ({ id })),
        },
        name: dto.name,
        qty: dto.qty,
        price: dto.price,
        photo: dto.photo,
      },
    });
    return user;
  }

  async findOneProduct(id: string) {
    const user = await this.prisma.products.findUnique({
      where: { id: id },
    });

    return user;
  }

  async updateProduct(id: string, dto: UpdateProductDto) {
    const { categories, ...updateData } = dto;

    const updatedProduct = await this.prisma.products.update({
      where: { id },
      data: {
        ...updateData,
        categories: categories
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            {
              connect: categories.map((category) => ({
                id: String(category.id),
              })),
            }
          : undefined,
      },
    });

    return updatedProduct;
  }

  async deleteProduct(id: string) {
    return this.prisma.products.delete({
      where: { id },
    });
  }
}
