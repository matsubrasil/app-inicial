import { ReactNode } from 'react';

export function Caixa({ children }: { children: ReactNode }) {
  return (
    <div
      className="bg-purple-500 rounded-md p-2 w-64 h-64
  text-5xl font-thin
  flex justify-center items-center"
    >
      {children}
    </div>
  );
}
