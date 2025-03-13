import React from "react";
import { FaCode } from "react-icons/fa";

export const CodeWar = () => {
  return (
    <div
      className="codewars-section"
      style={{
        marginTop: "20px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div
        onClick={() =>
          window.open("https://www.codewars.com/users/rajkumarkvr", "_blank")
        }
        style={{
          pointerEvents: "auto !important", 
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "13px",
          fontWeight: "bold",
          color: "#ffcc00",
          textDecoration: "none",
          cursor: "pointer", 
          background: "#222",
          padding: "10px 15px",
          borderRadius: "8px",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#444")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#222")}
      >
        <FaCode size={18} color="#ffcc00" />
        <span>Mastering Code Challenges on Codewars</span>
      </div>
    </div>
  );
};
