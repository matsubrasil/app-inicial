import { If } from "@/components/condicional/If";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

interface PerguntaProps {
  indice: number;
  texto: string;
  resposta: string;
  aberta: boolean;
  alternarVisibilidade: (indice: number) => void;
}

export function Pergunta({
  indice,
  texto,
  resposta,
  aberta,
  alternarVisibilidade,
}: PerguntaProps) {
  // const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border border-zinc-600 rounded-md overflow-hidden">
      <div
        className="bg-zinc-800 p-5 cursor-pointer select-none flex justify-between"
        onClick={() => alternarVisibilidade(indice)}
      >
        <span>{texto}</span>

        {aberta ? <IconChevronDown /> : <IconChevronUp />}
      </div>
      <If teste={aberta}>
        <div className="p-5">{resposta}</div>
      </If>
      {/* {open && <div className="p-5">{resposta}</div>} */}
    </div>
  );
}
