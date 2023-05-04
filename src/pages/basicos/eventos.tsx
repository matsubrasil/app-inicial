import { Evento } from '@/components/basicos/Evento';

export default function EventosPage() {
  return (
    <div className="h-screen flex flex-wrap gap-2 justify-center items-center">
      <Evento />
      <Evento />
      <Evento />
    </div>
  );
}
