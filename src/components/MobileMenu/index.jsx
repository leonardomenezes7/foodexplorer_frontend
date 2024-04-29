import { FiX } from "react-icons/fi";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Link } from "react-router-dom";

export function MobileMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut, user } = useAuth()

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

      {
        user.role === USER_ROLE.ADMIN &&
        <Link to="/new">
          Novo Prato
        </Link>
      }

      </div>
    </Container>
  )
}