import React, { useEffect, useState } from "react";
import "./FeedbackComponent.css";
import FeedbackButtonComponent from "../FeedbackButtonComponent/FeedbackButtonComponent";
import { FeedbackService } from "../../service/feedbackService";
import { MentionsInput, Mention } from "react-mentions";

interface User {
  id: string;
  name: string;
  received: number;
}

const FeedbackComponent: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [channel] = useState("C05ABCDEFG"); // Substitua com o ID real do canal do Slack

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      const mockUsers: User[] = [
        { id: "1", name: "arthurblasi", received: 0 },
        { id: "2", name: "Luís Trein", received: 0 },
        { id: "3", name: "Artur Plentz", received: 0 },
        { id: "4", name: "Letícia Nunes", received: 0 },
        { id: "5", name: "Joao Vitor", received: 0 },
        { id: "6", name: "Thiago Cardoso", received: 0 }
      ];
      setUsers(mockUsers);
      localStorage.setItem("users", JSON.stringify(mockUsers));
    }
  }, []);

  const handleClear = () => setMessage("");

  const handleSendClick = () => {
    if (!message.trim()) {
      alert("Digite algo antes de enviar.");
      return;
    }
    setShowConfirmation(true);
  };

  const sendFeedback = async (isAnonymous: boolean) => {
    // Extrair nomes mencionados no formato @nome
    const mentionedNames = [...message.matchAll(/@(\w+)/g)].map(m => m[1]);

    const updatedUsers = users.map(user => {
      if (mentionedNames.includes(user.name)) {
        return { ...user, received: user.received + 1 };
      }
      return user;
    });

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const payload = {
      text: message,
      tags: ["geral"],
      anon: isAnonymous,
      channel: channel,
      fromUser: isAnonymous ? null : "usuarioFake",
      toUser: mentionedNames.join(",") || "destinatarioFake"
    };

    try {
      await FeedbackService.sendFeedback(payload);
      alert("✅ Feedback enviado com sucesso!");
      setMessage("");
      setShowConfirmation(false);
    } catch (error: any) {
      alert("❌ Erro ao enviar: " + error.message);
      console.error("Erro:", error);
    }
  };

  return (
    <div className="feedback-container">
      <span className="feedback-label">DÊ SEU FEEDBACK</span>

      <MentionsInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="feedback-textarea"
        placeholder="Olá, @..., passando para avisar que gostei muito do seu trabalho na tarefa..."
      >
        <Mention
          trigger="@"
          data={users.map(u => ({ id: u.name, display: u.name }))}
          markup="@__display__"
          displayTransform={(id, display) => `@${display}`}
        />
      </MentionsInput>

      {!showConfirmation ? (
        <div className="feedback-buttons">
          <FeedbackButtonComponent label="LIMPAR" filled={false} onClick={handleClear} />
          <FeedbackButtonComponent label="ENVIAR" filled={true} onClick={handleSendClick} />
        </div>
      ) : (
        <div className="feedback-confirmation">
          <span className="confirmation-question">Deseja enviar feedback de maneira anônima?</span>
          <div className="feedback-buttons">
            <FeedbackButtonComponent label="CANCELAR" filled={false} onClick={() => setShowConfirmation(false)} />
            <FeedbackButtonComponent label="NÃO" filled={false} onClick={() => sendFeedback(false)} />
            <FeedbackButtonComponent label="SIM" filled={true} onClick={() => sendFeedback(true)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackComponent;
