import React, { useState } from "react";
import "./FeedbackComponent.css";
import FeedbackButtonComponent from "../FeedbackButtonComponent/FeedbackButtonComponent";

const FeedbackComponent: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    const payload = {
      message,
      anonymous: isAnonymous,
      fromUser: isAnonymous ? null : "usuarioFake", // ajuste isso se tiver auth real
      toUser: "destinatarioFake", // substitua pela lógica real
    };

    console.log("Enviando feedback:", payload);

    // Aqui vai a chamada real da API
    // await api.post("/feedback", payload);

    alert("Feedback enviado com sucesso!");
    setMessage("");
    setShowConfirmation(false);
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
          <FeedbackButtonComponent label="ENVIAR" filled={true} onClick={handleSendClick}/>
        </div>
      ) : (
        <div className="feedback-confirmation">
          <span className="confirmation-question">Deseja enviar feedback de maneira anônima?</span>
          <div className="feedback-buttons">
            <FeedbackButtonComponent label="CANCELAR" filled={false} onClick={() => setShowConfirmation(false)}/>
            <FeedbackButtonComponent label="NÃO" filled={false} onClick={() => sendFeedback(false)}/>        
            <FeedbackButtonComponent label="SIM" filled={true} onClick={() => sendFeedback(true)}/>  
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackComponent;
