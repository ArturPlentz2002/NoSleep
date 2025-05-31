import React, { useState } from "react";
import "./UsernameComponent.css";

interface UsernameComponentProps {
  name: string;
  avatarUrl: string;
}

const UsernameComponent: React.FC<UsernameComponentProps> = ({ name, avatarUrl }) => {
  const [imgError, setImgError] = useState(false);

  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="username-container">
      {imgError ? (
        <div className="user-avatar-fallback">{getInitials(name)}</div>
      ) : (
        <img
          src={avatarUrl}
          alt={`Avatar de ${name}`}
          className="user-avatar"
          onError={() => setImgError(true)}
        />
      )}
      <span className="user-name">{name}</span>
    </div>
  );
};

export default UsernameComponent;
