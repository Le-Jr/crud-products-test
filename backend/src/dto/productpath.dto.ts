export class UpdateProductDto {
  name?: string;
  qty?: number;
  price?: number;
  photo?: string;

  // Opcional para atualizar as categorias
  categories?: {
    id: any;
    connect: { id: string };
  }[];
}
