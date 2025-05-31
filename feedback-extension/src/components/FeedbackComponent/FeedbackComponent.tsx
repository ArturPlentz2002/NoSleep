import React, { useEffect, useState } from "react";
import "./FeedbackComponent.css";
import FeedbackButtonComponent from "../FeedbackButtonComponent/FeedbackButtonComponent";
import { MentionsInput, Mention } from "react-mentions";
import { getUsers } from "../../service/api";

interface User {
  id: string;
  name: string;
}

const FeedbackComponent: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const data = await getUsers();
  //       setUsers(data);
  //     } catch (err) {
  //       console.error("Erro ao buscar usuários:", err);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  useEffect(() => {
  // Mock de usuários direto no front
  const mockUsers = [
    { id: "1", name: "arthurblasi" },
    { id: "2", name: "Luís Trein" },
    { id: "3", name: "Artur Plentz" },
    { id: "4", name: "Letícia Nunes" },
    { id: "5", name: "Joao Vitor"},
    { id: "6", name: "Thiago Cardoso"}
  ];

  setUsers(mockUsers);
  }, []);

  const handleClear = () => {
    setMessage("");
  };

  const handleSendClick = () => {
    if (!message.trim()) {
      alert("Digite algo antes de enviar.");
      return;
    }

    setShowConfirmation(true);
  };

  const sendFeedback = (isAnonymous: boolean) => {
    const mentionedIds = [...message.matchAll(/\@\[.*?\]\((.*?)\)/g)].map(m => m[1]);

    const payload = {
      message,
      anonymous: isAnonymous,
      fromUser: isAnonymous ? null : "usuarioFake",
      toUserIds: mentionedIds,
    };

    console.log("Enviando feedback:", payload);
    alert("Feedback enviado com sucesso!");

    setMessage("");
    setShowConfirmation(false);
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
          data={users.map(u => ({ id: u.id, display: u.name }))}
          markup="@[$__display__]($__id__)"
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
