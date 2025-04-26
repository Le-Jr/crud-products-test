export interface Product {
  id: string;
  name: string;
  qty: number;
  price: number;
  photo: string;
  categories: Array<{ name: string }>;
}
