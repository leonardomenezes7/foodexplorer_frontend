import { Container } from "./styles";
import { PiPencilSimple } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function DishCard({ data, ...rest }) {
  const { user } = useAuth() 

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`

  const navigate = useNavigate()

  return(
    <Container {...rest}>
      { 
        user.role === USER_ROLE.ADMIN &&
        <>
          <Link to={`/edit/${data.id}`} className="edit">
            <PiPencilSimple/>
          </Link>
        </>
      }

      <Link className="details">
        <img src={imageURL} alt="Imagem do prato" />

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