import { useState } from "react";
import api from "../services/api"; 

export default function FeedbackForm() {
  const [toUser, setToUser] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!toUser || !message) {
      alert("Preencha todos os campos antes de enviar.");
      return;
    }

    try {
      await api.post("/feedback", {
        fromUser: "usuarioAtual", 
        toUser,
        message,
      });
      alert("Feedback enviado com sucesso!");
      setToUser("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar feedback.");
    }
  };

  return (
    <div>
      <h3>Enviar Feedback</h3>

      <label>Para:</label>
      <select value={toUser} onChange={(e) => setToUser(e.target.value)}>
        <option value="">Selecione um usuário</option>
        <option value="ana">ana</option>
        <option value="bruno">bruno</option>
        <option value="carla">carla</option>
        {/* Substituir com usuários reais */}
      </select>

      <label>Mensagem:</label>
      <textarea
        placeholder="Escreva seu feedback aqui"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}
