import { CarrinhoVazio } from "@/components/listas/CarrinhoVazio";
import { ItemCarrinho } from "@/components/listas/ItemCarrinho";
import { ItemCarrinhoModel } from "@/models/ItemCarrinhoModel";
import Moeda from "@/utils/Moeda";

interface CarrinhoProps {
  itens: ItemCarrinhoModel[];
}

export function Carrinho({ itens }: CarrinhoProps) {
  const total = itens.reduce(
    (soma, item) => soma + item.produto.price * item.quantidade,
    0
  );
  return (
    <div className="flex flex-col w-4/5 border border-white rounded-md p-2">
      <div
        className="flex justify-between items-center
        bg-zinc-800 text-3xl p-3 rounded-md
      "
      >
        <span>Carrinho</span>
        <span>{Moeda.formatar(total)}</span>
      </div>
      <div className=" flex gap-5 p-5">
        {itens.length === 0 ? (
          <CarrinhoVazio />
        ) : (
          itens.map((carrinho) => (
            <ItemCarrinho key={carrinho.produto.id} item={carrinho} />
          ))
        )}
      </div>
    </div>
  );
}
