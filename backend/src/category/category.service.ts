import { Injectable } from '@nestjs/common';
import { CategoryDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async listCategory() {
    const user = await this.prisma.category.findMany({
      include: {
        children: true,
        parent: true,
        products: true,
      },
    });

    return user;
  }

  async createCategory(dto: CategoryDto) {
    const user = await this.prisma.category.create({
      data: {
        parentId: dto.parentId,
        name: dto.name,
      },
    });
    return user;
  }
}
