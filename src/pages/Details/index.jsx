import { Container, Items } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import Image from "../../assets/image.png"
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
 
export function Details() {
  return(
    <Container>
      <Header/>
        <main>
          <Link to="/">
            <MdOutlineKeyboardArrowLeft/>
            voltar
          </Link>

          <div>
            <img src={Image} alt="" />

            <Items>
              <h2>Salada Ravanello</h2>

              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

              <section className="ingredients">
                <Ingredient title="teste"/>
                <Ingredient title="teste"/>
              </section>

              <Link to="/edit">
                <Button title="Editar Prato"/>
              </Link>
            </Items>
          </div>
        </main>

      <Footer/>
    </Container>
  )
}