import { useCallback, useEffect, useState } from "react";
import { useProcessando } from "@/data/hooks/useProcessando";

export function useStarWars() {
  const [personagens, setPersonagens] = useState<any[]>([]);
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const [personagem, setPersonagem] = useState<any>([]);
  const [filmes, setFilmes] = useState<any>([]);

  const obterFilmes = useCallback(
    async (personagem: any) => {
      if (!personagem?.films?.length) {
        return;
      }

      try {
        iniciarProcessamento();
        const requests = personagem.films.map(async (filme: string) => {
          const resp = await fetch(filme);
          return resp.json();
        });

        const filmes = await Promise.all(requests);

        setFilmes(filmes);
      } finally {
        finalizarProcessamento();
      }
    },
    [iniciarProcessamento, finalizarProcessamento]
  );

  const obterPersonagens = useCallback(async () => {
    try {
      iniciarProcessamento();
      const resp = await fetch("https://swapi.dev/api/people/");
      const data = await resp.json();

      setPersonagens(data.results);
    } finally {
      finalizarProcessamento();
    }
  }, [iniciarProcessamento, finalizarProcessamento]);

  const selecionarPersonagem = (personagem: any) => {
    setPersonagem(personagem);
  };

  function voltar() {
    setPersonagem([]);
    setFilmes([]);
  }

  useEffect(() => {
    obterFilmes(personagem);
  }, [obterFilmes, personagem]);

  useEffect(() => {
    obterPersonagens();
  }, [obterPersonagens]);

  // async function obterPersonagens() {
  //   try {
  //     iniciarProcessamento();
  //     const resp = await fetch("https://swapi.dev/api/people/");
  //     const data = await resp.json();
  //     setPersonagens(data.results);
  //   } finally {
  //     finalizarProcessamento();
  //   }
  // }

  return {
    personagens,
    filmes,
    processando,
    selecionarPersonagem,
    voltar,
  };
}
