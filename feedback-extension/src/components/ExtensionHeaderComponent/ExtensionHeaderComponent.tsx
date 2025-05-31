import React from "react";
import "./ExtensionHeaderComponent.css";

const ExtensionHeaderComponent: React.FC = () => {
  const handleClose = () => {
    window.close(); // <- isso fecha a janela do popup
  };

  return (
    <div className="extension-header">
      <span className="logo-text">LOGO DO BAG</span>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default ExtensionHeaderComponent;
