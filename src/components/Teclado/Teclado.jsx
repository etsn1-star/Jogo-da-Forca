import Card from "../Card/Card";
import "./teclado.css";

const Teclado = ({ aoClicar }) => {
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="teclado">
      {alfabeto.map((letra) => (
        <Card key={letra} letra={letra} aoClicar={aoClicar} />
      ))}
    </div>
  );
};

export default Teclado;
