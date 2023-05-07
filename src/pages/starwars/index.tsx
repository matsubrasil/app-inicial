import { Background } from "@/components/starwars/Background";
import { Personagens } from "@/components/starwars/Personagens";
import { useStarWars } from "@/data/hooks/useStarWars";

export default function StarWarsPage() {
  const { personagens, processando, obterPersonagens } = useStarWars();

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <Background />
      <button onClick={obterPersonagens} className="bg-blue-500 p-5 rounded-md">
        Obter
      </button>
      <div className="p-5">
        {processando ? (
          <div>Processando...</div>
        ) : personagens.length > 0 ? (
          <Personagens personagens={personagens} />
        ) : (
          <div>Nenhum personagem</div>
        )}
      </div>
    </div>
  );
}
