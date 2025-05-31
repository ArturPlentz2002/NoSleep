import React from "react";
import ExtensionHeaderComponent from "../components/ExtensionHeaderComponent/ExtensionHeaderComponent";

const Popup = () => {
  return (
    <div className="extension"
         style={{ width: "300px", height: "500px", backgroundColor: "white", padding: "2%"}}>
      <ExtensionHeaderComponent />
      {/* restante do conteúdo */}
    </div>
  );
};

export default Popup;
