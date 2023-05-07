import { TabelaSerieA } from "@/components/listas/TabelaSerieA";
import { IconBallFootball } from "@tabler/icons-react";

export default function ListaBasicaPage() {
  const tabelaSerieA = [
    "Botafogo",
    "Fortaleza",
    "Palmeiras",
    "Internacional",
    "Fluminense",
    "Cruzeiro",
    "Grêmio",
    "São Paulo",
    "Vasco",
    "Atlético-MG",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1
        className="flex items-center gap-2
      text-5xl font-black"
      >
        <IconBallFootball size={50} stroke={1} className="text-green-500" />
        Tabela Série A
      </h1>
      <TabelaSerieA times={tabelaSerieA} />
    </div>
  );
}
