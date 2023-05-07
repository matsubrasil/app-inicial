import { useState } from "react";
import { useProcessando } from "@/data/hooks/useProcessando";

export function useStarWars() {
  const [personagens, setPersonagens] = useState<any>([]);
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();

  async function obterPersonagens() {
    try {
      iniciarProcessamento();
      const resp = await fetch("https://swapi.dev/api/people/");
      const data = await resp.json();
      setPersonagens(data.results);
    } finally {
      finalizarProcessamento();
    }
  }

  return {
    personagens,
    processando,
    obterPersonagens,
  };
}
