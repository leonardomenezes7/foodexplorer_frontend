import { Container } from "./styles";
import grayLogo from "../../assets/graylogo.svg"

export function Footer() {
  return(
    <Container>
      <div>
        <img src={grayLogo} alt="" />
        <h5>food explorer</h5>
      </div>
      
      <p>© 2024 - Todos os direitos reservados.</p>
    </Container>
  )
}