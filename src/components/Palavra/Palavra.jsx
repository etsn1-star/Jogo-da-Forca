import { useState } from "react";
import { useEffect } from "react";
import "./palavra.css";

const Palavra = ({ visiveis, adicionarErro }) => {
  const [ligado, setLigado] = useState(true);
  const [palavra, setPalavra] = useState("");

  return (
    <>
      {ligado ? (
        <div className="informarPalavra">
          <h1>Informe a palavra:</h1>
          <input
            type="text"
            value={palavra}
            onChange={(e) => setPalavra(e.target.value.toUpperCase())}
          />
          <button className="enviar" onClick={() => setLigado(!ligado)}>
            ENVIAR
          </button>
        </div>
      ) : (
        <Letras
          palavra={palavra}
          visiveis={visiveis}
          adicionarErro={adicionarErro}
        />
      )}
    </>
  );
};

export default Palavra;

const Letras = ({ palavra, visiveis, adicionarErro }) => {
  const [verificado, setVerificado] = useState([]);

  function verificarErros() {
    visiveis.forEach((letra1) => {
      if (!palavra.split("").includes(letra1) && !verificado.includes(letra1)) {
        adicionarErro(letra1);
        setVerificado((prev) => [...prev, letra1]);
      }
    });
  }

  useEffect(() => {
    verificarErros();
  }, [visiveis]);

  return (
    <div className="letras">
      {palavra.split("").map((letra, index) => (
        <span key={index}>
          <h2>{visiveis.includes(letra) ? letra : "_"}</h2>
        </span>
      ))}
    </div>
  );
};
