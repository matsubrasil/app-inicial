import { useCallback, useState } from "react";

export function useProcessando() {
  const [processando, setProcessando] = useState<boolean>(false);

  // function iniciarProcessamento() {
  //   setProcessando(true);
  // }

  // function finalizarProcessamento() {
  //   setProcessando(false);
  // }

  /* há uma dependência do estado "processando", para corrigir temos de realizar ..
  const alternarProcessamento = useCallback(() => {
    setProcessando(!processando);
  }, [processando]);
  */
  /* Aqui não a dependência do estado "processando"
  const alternarProcessamento = useCallback(() => {
    setProcessando(atual => !atual);
  }, []);
  */

  const iniciarProcessamento = useCallback(() => {
    setProcessando(true);
  }, []);

  const finalizarProcessamento = useCallback(() => {
    setProcessando(false);
  }, []);

  return {
    processando,
    iniciarProcessamento,
    finalizarProcessamento,
  };
}
