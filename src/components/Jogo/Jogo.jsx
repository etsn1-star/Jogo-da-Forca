import { useState } from "react";
import Teclado from "../Teclado/Teclado";
import Palavra from "../Palavra/Palavra";

const Jogo = () => {
  const [visiveis, setVisiveis] = useState([]);
  const [erro, setErro] = useState([]);

  function adicionarLetra(letra) {
    setVisiveis((prev) => [...prev, letra]);
  }
  function adicionarErro(erro) {
    setErro((prev) => [...prev, erro]);
  }

  return (
    <>
      <Palavra visiveis={visiveis} adicionarErro={adicionarErro} />
      <Teclado aoClicar={adicionarLetra} />
    </>
  );
};
export default Jogo;
