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

export function Header({ onOpenMenu }) {
  const { signOut } = useAuth()

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

        <span>admin</span>
      </section>
     
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={CiSearch}
      />

      <Link to="/new">
        <Button
          title="Novo Prato"
          // icon={PiReceipt}
        />
      </Link>

      <button 
        className="sign-out-desktop"
        onClick={signOut}
      >
        <RxExit/>
      </button>
    </Container>
  )
}