interface Filmes {
  filme: string;
}

export interface Personagem {
  name: string;
  height: number;
  mass: number;
  filmes?: Filmes[];
}
