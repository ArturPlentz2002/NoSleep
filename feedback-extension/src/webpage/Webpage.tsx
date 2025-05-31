import { useEffect, useState } from "react";
import "./Webpage.css";

type RankingEntry = {
  user: string;
  positive: number;
  negative: number;
};

export default function Webpage() {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  useEffect(() => {
    setRanking([
      { user: "maria", positive: 10, negative: 2 },
      { user: "joao", positive: 6, negative: 0 },
      { user: "ana", positive: 5, negative: 1 },
      { user: "bruno", positive: 4, negative: 2 },
      { user: "paula", positive: 3, negative: 0 },
      { user: "carlos", positive: 2, negative: 3 }, // pontos negativos, não aparece
    ]);
  }, []);

  // Calcula pontos e filtra apenas quem tem pontos positivos
  const topRanking = ranking
    .map((entry) => ({
      ...entry,
      points: entry.positive - entry.negative,
    }))
    .filter((entry) => entry.points > 0)
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">🏆 Ranking Geral</h1>
        <p className="subtitle">Veja os colaboradores mais reconhecidos!</p>
      </div>
      <div className="list">
        {topRanking.map((entry, index) => (
          <div
            key={index}
            className={`card ${index < 3 ? "card-pink" : "card-blue"}`}
          >
            <span className="position">#{index + 1}</span>
            <span className="user">
              @{entry.user}
              {index < 3 && <span className="fire">🔥</span>}
            </span>
            <span className="count">{entry.points} pontos</span>
          </div>
        ))}
      </div>
    </div>
  );
}
