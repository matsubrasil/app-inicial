import { ReactNode } from 'react';
interface CirculoProps {
  texto: string;
  quasePerfeito?: boolean;
}

export function Circulo({ texto, quasePerfeito }: CirculoProps) {
  return (
    <div
      className={`
                  h-64 w-64  bg-cyan-500 
                  flex justify-center items-center 
                  text-5xl text-black font-black
                  ${quasePerfeito ? 'rounded-md' : 'rounded-full'}
                `}
    >
      {texto}
    </div>
  );
}
