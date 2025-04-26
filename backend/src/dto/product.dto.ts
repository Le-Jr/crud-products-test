/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsArray()
  @IsNotEmpty({ each: true })
  categories: string[];
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  qty: number;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsString()
  photo: string;
}
