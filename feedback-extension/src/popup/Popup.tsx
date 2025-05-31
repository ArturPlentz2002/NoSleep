/// <reference types="chrome" />

import React from "react";
import { useState } from "react";
import ExtensionHeaderComponent from "../components/ExtensionHeaderComponent/ExtensionHeaderComponent";
import UsernameComponent from "../components/UsernameComponent/UsernameComponent";
import FeedbackComponent from "../components/FeedbackComponent/FeedbackComponent";
import LeadersComponent from "../components/LeadersComponent/LeadersComponent";
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
         style={{ width: "300px", height: "460px", backgroundColor: "white", padding: 0, margin: 0}}>
      <ExtensionHeaderComponent />
      <UsernameComponent
        name="Arthur Blasi"
        avatarUrl="https://example.com/avatar.jpg"
      />
      <FeedbackComponent/>
      <LeadersComponent
        label="MELHOR AVALIADO"
        name="Arthur Blasi"
        avatarUrl="https://example.com/arthur.jpg"
      />
      <LeadersComponent
        label="MAIOR CONTRIBUINTE"
        name="Luis Trein"
        avatarUrl="https://example.com/luis.jpg"
      />
      <NavigateButton label="AUMENTAR VISUALIZAÇÃO"
      onClick={handleIncreaseView} 
      />
    </div>
  );
};

export default Popup;
