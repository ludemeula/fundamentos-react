import React from "react";
import ComParametro from "./ComParametro";
import ComFilhos from "./ComFilhos";
import Card from "./layout/Card";
import ListaVirtualizada from "./ListaVirtualizada";
import "./App.css";

export default (params) => (
  <div className="App">
    {/* <Card titulo="Com Parâmetro">
      <ComParametro titulo="Outro título" subtitulo="outro subtitulo" />
    </Card>

    <Card titulo="Com Filhos">
      <ComFilhos>
        <ul>
          <li>Rodolfinho</li>
          <li>Alonso</li>
          <li>Almondega</li>
          <li>Molequinho</li>
        </ul>
      </ComFilhos>
    </Card> */}

    {/* <Card titulo="Lista Virtualizada"> */}
    <ListaVirtualizada />
    {/* </Card> */}
  </div>
);
