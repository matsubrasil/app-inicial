import { Circulo } from '@/components/basicos/Circulo';

export default function CirculosPage() {
  return (
    <div className="flex justify-around h-screen items-center">
      <Circulo texto="circ #1" />
      <Circulo texto="circ #2" />
      <Circulo texto="circ #3" />
      <Circulo texto="circ #4" quasePerfeito />
    </div>
  );
}
