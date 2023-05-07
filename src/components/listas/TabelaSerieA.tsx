interface TabelaSerieAProps {
  times: string[];
}

export function TabelaSerieA({ times }: TabelaSerieAProps) {
  return (
    <ol>
      {times.map((time, i) => (
        <li
          key={time}
          className={`text-xl list-decimal ${
            i % 2 === 0 ? "text-blue-500" : "text-yellow-500"
          }`}
        >
          {time}
        </li>
      ))}
    </ol>
  );
}
