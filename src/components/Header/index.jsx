import { Container } from "./styles";
import{ Input } from "../Input"
import { CiSearch } from "react-icons/ci";
import { Button } from "../Button";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import logo from "../../assets/favicon.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Header({ onOpenMenu, children }) {
  const { user, signOut } = useAuth()

  return(
    <Container>
      <button 
        className="sign-out" 
        onClick={onOpenMenu}
      >
        <GiHamburgerMenu/>
      </button>
  
      <section>
        <h4>
          <img src={logo} alt="Logo" />
          food explorer
        </h4>

        {
          user.role === USER_ROLE.ADMIN &&
          <span>admin</span>
        }
      </section>
     
      {children}

      {
        user.role === USER_ROLE.ADMIN &&
        <Link to="/new">
          <Button
            title="Novo Prato"
          />
        </Link>
      }

      { 
        user.role === USER_ROLE.CUSTOMER &&
        <>
          <Link to="#" className="edit">
            <Button
              title="Pedidos (0)"
              icon={PiReceipt}
            />
          </Link>
        </>
      }

      <button 
        className="sign-out-desktop"
        onClick={signOut}
      >
        <RxExit/>
      </button>
    </Container>
  )
}