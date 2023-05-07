import Image from "next/image";
import { Product } from "@/models/Produto";
import { IconShoppingCart } from "@tabler/icons-react";
import Moeda from "@/utils/Moeda";

interface ItemProductProps {
  produto: Product;
  adicionarCompra: (produto: Product) => void;
}

export function ItemProduct({ produto, adicionarCompra }: ItemProductProps) {
  return (
    <div
      className="
        flex flex-col
        rounded-md p-1
        border border-zinc-600"
    >
      <Image
        src={produto.images}
        width={300}
        height={200}
        alt={produto.description}
        className="rounded-md"
      />
      <div className="flex flex-col p-3 gap-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{produto.name}</div>
          <div className="text-green-600 font-semibold">
            {Moeda.formatar(produto.price)}
          </div>
        </div>
        <div>
          <div className="text-gray-500">{produto.description}</div>
        </div>
        <div>
          <button
            className="botao flex justify-center items-center gap-2 w-full"
            onClick={() => adicionarCompra(produto)}
          >
            <IconShoppingCart size={20} /> Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
