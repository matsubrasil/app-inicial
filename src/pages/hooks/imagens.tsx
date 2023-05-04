import { ImagemAleatoria } from "@/components/hooks/ImagemAleatoria";

export default function imagensPage() {
  return (
    <div className="h-screen flex justify-center items-center gap-5 flex-wrap">
      <ImagemAleatoria />
      <ImagemAleatoria />
      <ImagemAleatoria />
    </div>
  );
}
