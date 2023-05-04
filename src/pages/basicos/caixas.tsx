import { Caixa } from '@/components/basicos/Caixa';

export default function CaixasPage() {
  return (
    <div className="flex gap-7 p-7">
      <Caixa>Caixa 1</Caixa>
      <Caixa>Caixa 2</Caixa>
      <Caixa>Caixa 3</Caixa>
    </div>
  );
}
