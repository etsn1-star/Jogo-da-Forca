import { useState } from "react";
import "./card.css";

const Card = ({ letra }) => {
  const [ligado, setLigado] = useState(true);
  return (
    <>
      {ligado ? (
        <button className="letraCard" onClick={() => setLigado(!ligado)}>
          {letra}
        </button>
      ) : null}
    </>
  );
};

export default Card;
