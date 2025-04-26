/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CategoryDto {
  @ApiPropertyOptional({
    example: '123',
    description: 'Parent category ID (optional)',
  })
  @IsOptional()
  @IsString()
  parentId?: string;

  @ApiProperty({ example: 'Eletronics', description: 'Name of the Category' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
