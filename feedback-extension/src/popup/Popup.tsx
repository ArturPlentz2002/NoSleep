/// <reference types="chrome" />

import React from "react";
import { useState } from "react";
import ExtensionHeaderComponent from "../components/ExtensionHeaderComponent/ExtensionHeaderComponent";
import UsernameComponent from "../components/UsernameComponent/UsernameComponent";
import FeedbackButtonComponent from "../components/FeedbackButtonComponent/FeedbackButtonComponent";
import NavigateButton from "../components/NavigateButton/NavigateButton";

const Popup = () => {

  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      alert("Mensagem vazia!");
      return;
    }

    // Aqui você poderia enviar o feedback via API
    console.log("Enviado:", message);
    alert("Feedback enviado com sucesso!");
    setMessage(""); // limpa após enviar
  };

  const handleClear = () => {
    setMessage("");
  };

  const handleIncreaseView = () => {
     chrome.tabs.create({ url: chrome.runtime.getURL("webview.html") });
  };

  return (
    <div className="extension"
         style={{ width: "300px", height: "500px", backgroundColor: "white", padding: "2%"}}>
      <ExtensionHeaderComponent />
      <UsernameComponent
        name="Arthur Blasi"
        avatarUrl="https://example.com/avatar.jpg"
      />
      <div style={{gap: "50px"}}>
        <FeedbackButtonComponent label="LIMPAR" filled={false} onClick={handleClear} />
        <FeedbackButtonComponent label="ENVIAR" filled={true} onClick={handleSend} />
      </div>
      {/* restante do conteúdo */}
      <NavigateButton label="AUMENTAR VISUALIZAÇÃO"
      onClick={handleIncreaseView} 
      />
    </div>
  );
};

export default Popup;
