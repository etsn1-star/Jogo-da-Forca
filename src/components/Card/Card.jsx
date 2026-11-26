import { useState } from "react";
import "./card.css";

const Card = ({ letra, aoClicar }) => {
  const [ligado, setLigado] = useState(true);
  return (
    <>
      {ligado ? (
        <button
          className="letraCard"
          onClick={() => {
            setLigado((prev) => !prev);
            aoClicar(letra);
          }}
        >
          {letra}
        </button>
      ) : null}
    </>
  );
};

export default Card;
