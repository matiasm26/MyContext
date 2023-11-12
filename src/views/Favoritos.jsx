import { useContext } from "react";
import { Context } from "../MyContext";
import { Card } from "react-bootstrap";

const Favoritos = () => {
  const { fotos } = useContext(Context);

  return (
      <div className="App">
      <h1>Fotos Favoritas</h1>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3">
        {fotos
        .filter((foto)=>foto.liked===true)
        .map((foto, i) => (
          <div className="col" key={i}>
            <Card className="text-light">
            <Card.Img src={foto.src.tiny} alt={foto.alt} />
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Favoritos;