import React from "react";
import "./FeedbackButtonComponent.css";

interface FeedbackButtonComponentProps {
  label: string;
  filled?: boolean;
  onClick?: () => void;
}

const FeedbackButtonComponent: React.FC<FeedbackButtonComponentProps> = ({
  label,
  filled = false,
  onClick,
}) => {
  return (
    <button
      className={`feedback-button ${filled ? "filled" : "outline"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FeedbackButtonComponent;
