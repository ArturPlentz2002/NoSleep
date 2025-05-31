import React from "react";
import "./ExtensionHeaderComponent.css";

const ExtensionHeaderComponent: React.FC = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="extension-header">
      <span className="logo-text">FeedbackExtension</span>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default ExtensionHeaderComponent;
