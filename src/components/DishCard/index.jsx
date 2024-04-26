import { Container } from "./styles";
import { PiPencilSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function DishCard({ data, ...rest }) {
  const { user } = useAuth()

  return(
    <Container  {...rest}>
      { 
        user.role === USER_ROLE.ADMIN &&
        <>
          <Link to="/edit" className="edit">
            <PiPencilSimple/>
          </Link>
        </>
      }

      <Link to="/details" className="details">
        <img src={""} alt="Imagem do prato" />

        <strong>{data.name}</strong>

        <small>{data.description}</small>

        <h4>{data.price}</h4>
      </Link>

     { 
      user.role === USER_ROLE.CUSTOMER &&
      <div>
        <div>
          <FiMinus/>
          <p>01</p>
          <FiPlus/>
        </div>
        <Button title="Incluir"/>
      </div>
     }
    </Container>
  )
}