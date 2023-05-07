import React from "react";

interface GridProps {
  children?: React.ReactNode;
  cols?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xl2?: number;
}

export function Grid({ cols, sm, md, lg, xl, xl2, children }: GridProps) {
  //grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
  return (
    <div
      className={`grid grid-cols-${cols ?? 1}
        ${sm ? `sm:grid-cols-${sm}` : ""}
        ${md ? `md:grid-cols-${md}` : ""}
        ${lg ? `lg:grid-cols-${lg}` : ""}
        ${xl ? `xl:grid-cols-${xl}` : ""}
        ${xl2 ? `2xl:grid-cols-${xl2}` : ""}
        gap-4 w-full `}
    >
      {children}
    </div>
  );
}
