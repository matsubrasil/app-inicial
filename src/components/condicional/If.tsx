import { ReactNode } from "react";

interface IfProps {
  teste: boolean;
  children: JSX.Element;
}

export function If({ teste, children }: IfProps) {
  if (teste) return children;
  return null;
}
