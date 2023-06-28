import React from "react";
import { Calendar } from "react-calendar";
import { Link } from "react-router-dom";

function MyCalendar() {
  return (
    <div>
      <div className="btnVoltar">
        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/menu"
        >
          <button
            style={{
              fontWeight: "bold",
              padding: "5px",
              border: "none",
              borderRadius: "8px",
              width: "100px",
              fontSize: "20px",
              backgroundColor: "limegreen",
              cursor: "pointer",
              margin: "5px",
            }}
          >
            Voltar{" "}
          </button>
        </Link>
      </div>

      <div className="calendario">
        <h1 style={{ color: "white" }}>Meu Calendário</h1>
        <Calendar style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default MyCalendar;
