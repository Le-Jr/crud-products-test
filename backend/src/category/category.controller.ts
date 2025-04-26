import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from 'src/dto';

@Controller()
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('category')
  listCategory() {
    return this.categoryService.listCategory();
  }

  @Post('category')
  createCategory(@Body() dto: CategoryDto) {
    return this.categoryService.createCategory(dto);
  }
}
