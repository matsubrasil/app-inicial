import { ItemCarrinhoModel } from "@/models/ItemCarrinhoModel";
import Moeda from "@/utils/Moeda";

interface ItemCarrinhoProps {
  item: ItemCarrinhoModel;
}

export function ItemCarrinho({ item }: ItemCarrinhoProps) {
  return (
    <div
      className="flex items-center gap-2
      rounded-full bg-blue-500"
    >
      <span
        className="w-7 h-7 p-2 bg-blue-700 rounded-full
      flex justify-center items-center"
      >
        {item.quantidade}
      </span>
      <span>{item.produto.name}</span>
      <span className="pr-5">
        {Moeda.formatar(item.produto.price * item.quantidade)}
      </span>
    </div>
  );
}
