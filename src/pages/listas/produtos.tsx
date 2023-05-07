import { Carrinho } from "@/components/listas/Carinho";
import { ListProducts } from "@/components/listas/ListProducts";
import { produtos } from "@/constants/produto";
import { ItemCarrinhoModel } from "@/models/ItemCarrinhoModel";
import { Product } from "@/models/Produto";
import { useState } from "react";

export default function ListaProdutosPage() {
  const [itens, setItens] = useState<ItemCarrinhoModel[]>([]);

  function adicionarProduto(produto: Product) {
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {
      quantidade: 0,
      produto,
    };

    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
    const oldItens = itens.filter((item) => item.produto.id !== produto.id);
    setItens([...oldItens, novoItem]);
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <Carrinho itens={itens} />
      <ListProducts lista={produtos} comprar={adicionarProduto} />
    </div>
  );
}
