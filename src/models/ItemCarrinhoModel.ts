import { Product } from "@/models/Produto";

export interface ItemCarrinhoModel {
  produto: Product;
  quantidade: number;
}
