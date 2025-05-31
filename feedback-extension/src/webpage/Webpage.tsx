import { useEffect, useState } from "react";
import "./Webpage.css";

type RankingEntry = {
  user: string;
  positive: number;
  negative: number;
};

type SentRankingEntry = {
  user: string;
  sent: number;
};

export default function Webpage() {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  const feedbackSentRanking: SentRankingEntry[] = [
    { user: "lucas", sent: 15 },
    { user: "bia", sent: 13 },
    { user: "rafa", sent: 11 },
    { user: "tati", sent: 9 },
    { user: "leo", sent: 7 },
    { user: "igor", sent: 3 },
  ];

  useEffect(() => {
    setRanking([
      { user: "maria", positive: 10, negative: 2 },
      { user: "joao", positive: 6, negative: 0 },
      { user: "ana", positive: 5, negative: 1 },
      { user: "bruno", positive: 4, negative: 2 },
      { user: "paula", positive: 3, negative: 0 },
      { user: "carlos", positive: 2, negative: 3 },
    ]);
  }, []);

  function getTopRanking(data: RankingEntry[]) {
    return data
      .map((entry) => ({
        ...entry,
        points: entry.positive - entry.negative,
      }))
      .filter((entry) => entry.points > 0)
      .sort((a, b) => b.points - a.points)
      .slice(0, 5);
  }

  function getTopSentRanking(data: SentRankingEntry[]) {
    return data.sort((a, b) => b.sent - a.sent).slice(0, 5);
  }

  const topRanking = getTopRanking(ranking);
  const topSentRanking = getTopSentRanking(feedbackSentRanking);

  return (
    <div className="container dual-ranking">
      <div className="ranking-block">
        <div className="header">
          <h1 className="title">🏆 Top Avalidados</h1>
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
      <div className="ranking-block">
        <div className="header">
          <h1 className="title">⭐ Top Contribuintes </h1>
          <p className="subtitle">
            Colaboradores que mais reconheceram colegas
          </p>
        </div>
        <div className="list">
          {topSentRanking.map((entry, index) => (
            <div
              key={index}
              className={`card ${index < 3 ? "card-pink" : "card-blue"}`}
            >
              <span className="position">#{index + 1}</span>
              <span className="user">
                @{entry.user}
                {index < 3 && <span className="fire">🔥</span>}
              </span>
              <span className="count">{entry.sent} enviados</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
