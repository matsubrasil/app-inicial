import { IconCircleX } from "@tabler/icons-react";

export function CarrinhoVazio() {
  return (
    <div className="flex justify-start items-center gap-2 w-full text-zinc-500">
      <IconCircleX />
      <span>Nenhum item no carrinho</span>
    </div>
  );
}
