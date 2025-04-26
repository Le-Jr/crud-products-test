import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  listCategory() {
    return 'Hello';
  }
}
