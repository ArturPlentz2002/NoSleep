import { useEffect, useState } from "react";
import "./Webpage.css";

type User = {
  id: string;
  name: string;
  received: number;
};

export default function Webpage() {
  const [ranking, setRanking] = useState<User[]>([]);

  const feedbackSentRanking = [
    { user: "Letícia Nunes", sent: 4 },
    { user: "Joao Vitor", sent: 3 },
    { user: "Luís Trein", sent: 2 },
    { user: "arthurblasi", sent: 2 },
    { user: "Artur Plentz", sent: 1 }
  ];

    const feedbackRecievedRanking = [
    { user: "arthurblasi", sent: 4 },
    { user: "Luís Trein", sent: 2 },
    { user: "Artur Plentz", sent: 2 },
    { user: "Letícia Nunes", sent: 2 },
    { user: "Joao Vitor", sent: 2 }
  ];

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      const parsed: User[] = JSON.parse(stored);
      const sorted = parsed
        .filter(u => u.received > 0)
        .sort((a, b) => b.received - a.received)
        .slice(0, 5);
      setRanking(sorted);
    }
  }, []);

  return (
    <div className="container dual-ranking">
      <div className="ranking-block">
        <div className="header">
          <h1 className="title">🏆 Top Avalidados</h1>
          <p className="subtitle">Veja os colaboradores mais reconhecidos!</p>
        </div>
        <div className="list">
          {feedbackRecievedRanking.map((entry, index) => (
            <div key={index} className={`card ${index < 3 ? "card-pink" : "card-blue"}`}>
              <span className="position">#{index + 1}</span>
              <span className="user">@{entry.user} {index < 3 && <span className="fire">🔥</span>}</span>
              <span className="count">{entry.sent} pontos</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ranking-block">
        <div className="header">
          <h1 className="title">⭐ Top Contribuintes</h1>
          <p className="subtitle">Colaboradores que mais reconheceram colegas</p>
        </div>
        <div className="list">
          {feedbackSentRanking.map((entry, index) => (
            <div key={index} className={`card ${index < 3 ? "card-pink" : "card-blue"}`}>
              <span className="position">#{index + 1}</span>
              <span className="user">@{entry.user} {index < 3 && <span className="fire">🔥</span>}</span>
              <span className="count">{entry.sent} enviados</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
