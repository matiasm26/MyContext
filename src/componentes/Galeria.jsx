import { useContext } from "react";
import { Context } from "../MyContext";
import { Card } from "react-bootstrap";
import Heart from "./Heart";

const Galeria = () => {
  const { fotos, setFotos } = useContext(Context);

  const liked = (i)=>{
    fotos[i].liked=!fotos[i].liked
    setFotos([...fotos])
  }

  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3">
      {fotos.map((foto, i) => (
        <div className="col" key={i}>
          <Card className="text-light">
            <Card.Img src={foto.src.tiny} alt={foto.alt} />
            <Card.ImgOverlay className="bodyCard">
              <div className="boxHeart" onClick= {()=>liked(i)} >
              <Heart liked={foto.liked} />
              </div>
            <Card.Title>{foto.alt}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Galeria;