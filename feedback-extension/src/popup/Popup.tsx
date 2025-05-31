import { useState } from "react";
import Ranking from "../../src/components/Ranking/Ranking";

export default function Popup() {
  const [ativo, setAtivo] = useState(false);
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Popup</h2>
      <p>Envie seu feedback aqui!</p>
      <button
        onClick={() => {
          setAtivo(!ativo);
          console.log("Botão clicado, ativo:", !ativo);
        }}
      >
        teste
      </button>
      {ativo && <Ranking />}
    </div>
  );
}
