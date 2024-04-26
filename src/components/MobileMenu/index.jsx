import { FiX } from "react-icons/fi";
import { Container } from "./styles";

export function MobileMenu({ menuIsOpen, onCloseMenu }) {
  return(
    <Container data-menu-is-open={menuIsOpen}>
      <header>
        <button onClick={onCloseMenu}>
          <FiX/> Menu
        </button>
      </header>

      <div>
        <button className="sign-out">Sair</button>
      </div>
    </Container>
  )
}