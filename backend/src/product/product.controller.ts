import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from 'src/dto/product.dto';
import { UpdateProductDto } from 'src/dto/productpath.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  listProducts() {
    return this.productService.listProduct();
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return this.productService.findOneProduct(id);
  }

  @Post()
  createProduct(@Body() dto: ProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.updateProduct(id, dto);
  }
}
