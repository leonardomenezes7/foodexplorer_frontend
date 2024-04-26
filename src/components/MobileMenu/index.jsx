import { FiX } from "react-icons/fi";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

export function MobileMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut } = useAuth()

  return(
    <Container data-menu-is-open={menuIsOpen}>
      <header>
        <button onClick={onCloseMenu}>
          <FiX/> Menu
        </button>
      </header>

      <div>
        <button 
          className="sign-out"
          onClick={signOut}
        >
          Sair
        </button>
      </div>
    </Container>
  )
}