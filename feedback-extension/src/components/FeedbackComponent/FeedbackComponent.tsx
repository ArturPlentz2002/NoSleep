import React, { useState } from "react";
import "./FeedbackComponent.css";
import FeedbackButtonComponent from "../FeedbackButtonComponent/FeedbackButtonComponent";

const FeedbackComponent: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleClear = () => {
    setMessage("");
  };

  const handleSend = () => {
    if (!message.trim()) {
      alert("Digite algo antes de enviar.");
      return;
    }

    console.log("Feedback enviado:", message);
    alert("Feedback enviado com sucesso!");
    setMessage("");
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

      <div className="feedback-buttons">
        <FeedbackButtonComponent label="ENVIAR" filled={true} onClick={handleSend}/>
        <FeedbackButtonComponent label="LIMPAR" filled={false} onClick={handleClear}/>
      </div>
    </div>
  );
};

export default FeedbackComponent;
