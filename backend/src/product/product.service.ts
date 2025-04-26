import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
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
}
