import React from "react";
import "./NavigateButton.css";

interface NavigateButtonProps {
  label: string;
  onClick?: () => void;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ label, onClick }) => {
  return (
    <button className="navigate-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default NavigateButton;
