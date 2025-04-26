/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

class CategoryRelationDto {
  @ApiPropertyOptional({
    example: 'abc123',
    description: 'Category relation ID (if updating existing relation)',
  })
  @IsOptional()
  id?: string;

  @ApiPropertyOptional({
    example: { id: '123e4567-e89b-12d3-a456-426614174000' },
    description: 'Object with ID of category to connect',
  })
  @IsOptional()
  connect?: { id: string };
}

export class UpdateProductDto {
  @ApiPropertyOptional({ example: 'Updated Product Name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsNumber()
  qty?: number;

  @ApiPropertyOptional({ example: 149.99 })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({ example: 'https://example.com/updated-photo.jpg' })
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiPropertyOptional({
    type: [CategoryRelationDto],
    description: 'Array of category relation objects to update or connect',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryRelationDto)
  categories?: CategoryRelationDto[];
}
