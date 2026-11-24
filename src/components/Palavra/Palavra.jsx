import { useState } from "react";
import "./palavra.css";

const Palavra = () => {
  const [ligado, setLigado] = useState(true);
  const [palavra, setPalavra] = useState("");
  const letras = palavra.split("");

  return (
    <>
      {ligado ? (
        <div className="informarPalavra">
          <h1>Informe a palavra:</h1>
          <input
            type="text"
            value={palavra}
            onChange={(e) => setPalavra(e.target.value)}
          />
          <button className="enviar" onClick={() => setLigado(!ligado)}>
            ENVIAR
          </button>
        </div>
      ) : (
        <div className="letras">
          {letras.map((letra) => (
            <span key={letra}>
              <h2>_</h2>
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Palavra;
