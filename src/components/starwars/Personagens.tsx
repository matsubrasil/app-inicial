interface PersonagensProps {
  personagens: any;
}

export function Personagens({ personagens }: PersonagensProps) {
  return (
    <div>
      <ul>
        {personagens.map((personagem: any) => (
          <li key={personagem.name}>{personagem.name}</li>
        ))}
      </ul>
    </div>
  );
}
