import Image from "next/image";
import { useState } from "react";

export function ImagemAleatoria() {
  const [pesquisa, setPesquisa] = useState<string>("abstract");
  const [tamanho, setTamanho] = useState<number>(300);
  const url = "https://source.unsplash.com/featured/";

  function renderizarBotao(valor: string) {
    return (
      <button
        className="bg-blue-600 px-4 rounded-md py-2"
        onClick={() => {
          setPesquisa(valor);
          console.log(pesquisa);
        }}
      >
        {valor}
      </button>
    );
  }

  return (
    <div className="flex gap-2 flex-col border border-zinc-400 p-7 rounded-md">
      <div className="flex gap-5 mb-5 justify-center">
        <span>{pesquisa}</span>
        <span>
          {tamanho}x{tamanho}
        </span>
      </div>
      <Image
        priority
        src={`${url}${tamanho}x${tamanho}?${pesquisa}`}
        height={300}
        width={300}
        alt="Imagem"
        className="rounded-md"
      />
      <div className="flex justify-between gap-5">
        {renderizarBotao("abstract")}
        {renderizarBotao("city")}
        {renderizarBotao("person")}
      </div>
      <div>
        <input
          className="bg-zinc-800 p-2 rounded-md outline-none w-full"
          type="number"
          value={tamanho}
          onChange={(e) => {
            setTamanho(+e.target.value);
          }}
        />
      </div>
    </div>
  );
}
