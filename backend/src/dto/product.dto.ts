/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    description: 'Array of category IDs this product belongs to',
    example: ['123e4567-e89b-12d3-a456-426614174000'],
  })
  @IsArray()
  @IsNotEmpty({ each: true })
  categories: string[];

  @ApiProperty({
    description: 'Name of the product',
    example: 'Wireless Headphones',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Available quantity of the product in stock',
    example: 20,
  })
  @IsNotEmpty()
  @IsNumber()
  qty: number;

  @ApiProperty({
    description: 'Price of the product',
    example: 199.99,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'URL of the product photo',
    example: 'https://example.com/images/headphones.jpg',
  })
  @IsNotEmpty()
  @IsString()
  photo: string;
}
