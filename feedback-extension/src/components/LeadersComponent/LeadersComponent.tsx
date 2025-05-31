import React from "react";
import "./LeadersComponent.css";
import UsernameComponent from "../UsernameComponent/UsernameComponent";

interface LeadersComponentProps {
  label: string;
  name: string;
  avatarUrl: string;
}

const LeadersComponent: React.FC<LeadersComponentProps> = ({ label, name, avatarUrl }) => {
  return (
    <div className="leaders-container">
      <span className="leaders-label">{label}</span>
      <UsernameComponent name={name} avatarUrl={avatarUrl} />
    </div>
  );
};

export default LeadersComponent;
