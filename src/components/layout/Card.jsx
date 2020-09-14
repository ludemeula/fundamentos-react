import React from "react";
import "./Card.css";

export default (params) => (
  <div className="Card">
    <div className="Conteudo">{params.children}</div>

    <div className="Footer">{params.titulo}</div>
  </div>
);
