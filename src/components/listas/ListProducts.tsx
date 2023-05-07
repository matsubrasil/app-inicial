import { ItemProduct } from "@/components/listas/ItemProduct";
import { Product } from "@/models/Produto";

interface ListProductsProps {
  lista: Product[];
  comprar: (produto: Product) => void;
}
export function ListProducts({ lista, comprar }: ListProductsProps) {
  return (
    <div className="flex flex-wrap gap-5">
      {lista.map((produto) => {
        return (
          <ItemProduct
            key={produto.id}
            produto={produto}
            adicionarCompra={comprar}
          />
        );
      })}
    </div>
  );
}
