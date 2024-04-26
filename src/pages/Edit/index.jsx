import { Container, Form, Section, Ingredients, Description } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { DishItem } from "../../components/DishItem";
import { Button } from "../../components/Button";

export function Edit() {
  return(
    <Container>
      <Header/>
       
       <main>
        <Link to="/">
          <MdOutlineKeyboardArrowLeft/>
          voltar
        </Link>

        <h2>Editar Prato</h2>

        <Form>
          <Section>
            <div>
              <span>Imagem do prato</span>
              <label htmlFor="">
                <FiUpload/>
                Selecione imagem
                <input
                  type="file"
                />
              </label>
            </div>

            <div>
              <span>Nome</span>

              <input
                type="text"
                placeholder="Ex: Salada"
                className="large"
              />
            </div>

            <div>
              <span>Categoria</span>

              <select>
                <option value="lunch">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="drink">Drink</option>
              </select>
            </div>
          </Section>

          <Ingredients>
            <div>
              <span>Ingredientes</span>
              <div>
                <DishItem isnew placeholder="Adicionar"/>
                <DishItem value="teste"/>
              </div>
            </div>

            <div>
              <span>Preço</span>
              <input
                type="text"
                placeholder="R$ 10,99"
                className="price"
              />
            </div>
          </Ingredients>

          <Description>
            <span>Descrição</span>

            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </Description>

          <div className="buttons">
            <Button
              title="Salvar"
            />

            <Button
              title="Excluir Prato"
              className="delete"
            />
          </div>
          
        </Form>
       </main>

      <Footer/>
    </Container>
  )
}