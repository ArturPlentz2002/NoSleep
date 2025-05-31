import React, { useState } from "react";
import "./FeedbackComponent.css";
import FeedbackButtonComponent from "../FeedbackButtonComponent/FeedbackButtonComponent";
import { FeedbackService } from "../../service/feedbackService";

const FeedbackComponent: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [channel] = useState("C05ABCDEFG"); // Substitua com o ID real do canal do Slack

  const handleClear = () => {
    setMessage("");
  };

  const sendFeedback = async (isAnonymous: boolean) => {
    if (!message.trim()) {
      alert("Digite algo antes de enviar.");
      return;
    }

    const payload = {
      text: message,
      tags: ["geral"],
      anon: isAnonymous,
      channel: channel,
      fromUser: isAnonymous ? null : "usuarioFake",
      toUser: "destinatarioFake",
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

  const handleSendClick = () => {
    if (!message.trim()) {
      alert("Digite algo antes de enviar.");
      return;
    }
    setShowConfirmation(true);
  };

  return (
    <div className="feedback-container">
      <span className="feedback-label">DÊ SEU FEEDBACK</span>

      <textarea
        className="feedback-textarea"
        placeholder="Olá, @..., passando para avisar que gostei muito do seu trabalho na tarefa..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

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
