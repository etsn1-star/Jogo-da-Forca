import Card from "../Card/Card";
import "./teclado.css";

const Teclado = () => {
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="teclado">
      {alfabeto.map((letra) => (
        <Card key={letra} letra={letra} />
      ))}
    </div>
  );
};

export default Teclado;
