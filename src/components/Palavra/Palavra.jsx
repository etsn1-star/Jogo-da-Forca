import { useState } from "react";
import "./palavra.css";

const Palavra = () => {
  const [ligado, setLigado] = useState(true);
  const [palavra, setPalavra] = useState("");
  const [visiveis, setVisiveis] = useState([]);

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
        <Letras palavra={palavra} visiveis={visiveis} />
      )}
    </>
  );
};

export default Palavra;

const Letras = ({ palavra, visiveis }) => {
  return (
    <div className="letras">
      {palavra.split("").map((letra, index) => (
        <span key={index}>
          <h2>{visiveis.includes(index) ? letra : "_"}</h2>
        </span>
      ))}
    </div>
  );
};
