import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import contadores from "./images/cliques por segundo cps test testar quantos cliques por segundo.jpg";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  const retroceder = () => {
    setNumClics(numClics - 1);
  };

  return (
    <div className="app">
      <div className="contador__logo--contenedor">
        <img
          className="contador__logo"
          src={contadores}
          alt="logo del contador"
        />
      </div>
      <div className="contenedor__principal">
        <Contador numClics={numClics} />
        <div className="contenedor__boton">
          <Boton
            texto="clic"
            esBotonDeClic={true}
            retroceder={false}
            manejarClic={manejarClic}
          />
          <Boton
            texto="Reinicar"
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />
          <Boton
            texto="retroceder"
            retroceder={false}
            manejarClic={retroceder}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
