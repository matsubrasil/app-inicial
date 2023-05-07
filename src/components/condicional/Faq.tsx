import { Pergunta } from "@/components/condicional/Pergunta";
import { useState } from "react";

export function Faq() {
  const [ativo, setAtivo] = useState<number>(0);

  function alternarVisibilidade(indice: number) {
    console.log("aqui", indice);
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  }
  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
      <Pergunta
        indice={0}
        texto="Pergunta #1"
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper molestie cursus. Ut interdum efficitur metus id egestas. Donec at leo nibh. Curabitur a augue lorem."
        aberta={ativo === 0}
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={1}
        texto="Pergunta #2"
        resposta="Aenean cursus pellentesque neque, sed dapibus metus pellentesque in. Morbi convallis, urna vitae tempor laoreet, arcu velit imperdiet arcu, vel facilisis lorem ante vitae arcu."
        aberta={ativo === 1}
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        indice={2}
        texto="Pergunta #3"
        resposta="Sed eu risus ac velit scelerisque malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum mattis orci a egestas fermentum."
        aberta={ativo === 2}
        alternarVisibilidade={alternarVisibilidade}
      />
    </div>
  );
}
