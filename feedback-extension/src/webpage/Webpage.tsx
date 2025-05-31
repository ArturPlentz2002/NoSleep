import { useEffect, useState } from "react";

type RankingEntry = {
  user: string;
  count: number;
};

export default function Webpage() {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  // MOCKED DATA
  useEffect(() => {
    setRanking([
      { user: "maria", count: 8 },
      { user: "joao", count: 6 },
      { user: "ana", count: 5 },
      { user: "bruno", count: 4 },
      { user: "paula", count: 3 },
    ]);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏆 Ranking Geral</h1>
      <p style={styles.subtitle}>Veja os colaboradores mais reconhecidos!</p>

      <div style={styles.list}>
        {ranking.map((entry, index) => (
          <div key={index} style={styles.card}>
            <span style={styles.position}>#{index + 1}</span>
            <span style={styles.user}>
              @{entry.user}
              {index < 3 && <span style={styles.fire}>🔥</span>}
            </span>
            <span style={styles.count}>{entry.count} feedbacks</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f4f8',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#666',
    marginBottom: '2rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  position: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#555',
    width: '50px',
  },
  user: {
    flex: 1,
    textAlign: 'left',
    fontSize: '1.1rem',
  },
  count: {
    color: '#1976d2',
    fontWeight: 'bold',
  },
  fire: {
    marginLeft: 8,
    fontSize: '1.2rem',
  },
};
