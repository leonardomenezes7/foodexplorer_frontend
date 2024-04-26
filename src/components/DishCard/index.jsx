import { Container } from "./styles";
import { PiPencilSimple } from "react-icons/pi";
import dish from "../../assets/Dish.png"
import { Link } from "react-router-dom";

export function DishCard({ title, price, image, description }) {
  return(
    <Container>
      <Link to="/edit" className="edit">
        <PiPencilSimple/>
      </Link>

      <Link to="/details" className="details">
        <img src={image} alt="Imagem do prato" />

        <strong>{title}</strong>

        <small>{description}</small>

        <h4>{price}</h4>
      </Link>
    </Container>
  )
}